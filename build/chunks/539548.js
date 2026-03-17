/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    a = t(517164),
    r = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    m = t(489379),
    A = t(900179),
    x = t(837924),
    p = t(558628),
    _ = t(842241),
    f = t(282797),
    h = t(518477),
    j = t(652215),
    g = t(985018),
    I = t(78702),
    b = t(781425);

function v(e) {
    let {
        user: n,
        currentUser: t,
        guildId: v,
        onClose: N
    } = e, {
        live: y,
        recent: C,
        stream: T
    } = (0, u.A)(n.id), {
        voiceChannel: E,
        voiceActivity: L
    } = (0, m.A)({
        userId: n.id,
        guildId: v
    }), P = (0, s.bG)([a.A], () => a.A.isFetchingUserOutbox(n.id)), R = n.id === t.id, O = (0, s.bG)([o.A, r.A], () => {
        let e = R ? o.A.getStatus() : r.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), S = (0, s.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), M = y.length > 0 || null != T, G = !S && null == T && null == L && null != E, k = !O && (M || G), U = C.length > 0;
    return k || U || !P ? (0, i.jsxs)(l.IpV, {
        className: I.XG,
        fade: !0,
        children: [k ? (0, i.jsx)(A.A, {
            "aria-label": g.intl.string(g.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: I.Ci,
                children: [null != T && (0, i.jsx)("li", {
                    children: (0, i.jsx)(_.A, {
                        user: n,
                        currentUser: t,
                        stream: T,
                        onClose: N
                    })
                }), y.map((e, s) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
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
        }) : null, U ? (0, i.jsx)(A.A, {
            heading: g.intl.string(g.t.M0zgnT),
            introText: R ? g.intl.format(g.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(l.MzZ, {
                    href: d.A.getArticleURL(j.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: I.Ci,
                children: C.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        entry: e,
                        onClose: N
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: b.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}