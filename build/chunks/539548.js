/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => E
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(517164),
    d = t(290863),
    s = t(461213),
    o = t(975571),
    c = t(622543),
    _ = t(146655),
    u = t(489379),
    p = t(900179),
    A = t(837924),
    g = t(558628),
    m = t(842241),
    f = t(282797),
    h = t(518477),
    I = t(652215),
    x = t(985018),
    b = t(575877),
    v = t(643146);

function E(e) {
    let {
        user: n,
        currentUser: t,
        guildId: E,
        onClose: y
    } = e, {
        live: j,
        recent: T,
        stream: N
    } = (0, _.A)(n.id), {
        voiceChannel: S,
        voiceActivity: C
    } = (0, u.A)({
        userId: n.id,
        guildId: E
    }), R = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(n.id)), P = n.id === t.id, L = (0, a.bG)([s.A, d.A], () => {
        let e = P ? s.A.getStatus() : d.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), O = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), D = j.length > 0 || null != N, k = !O && null == N && null == C && null != S, U = !L && (D || k), B = T.length > 0;
    return U || B || !R ? (0, i.jsxs)(l.IpV, {
        className: b.XG,
        fade: !0,
        children: [U ? (0, i.jsx)(p.A, {
            "aria-label": x.intl.string(x.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != N && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        stream: N,
                        onClose: y
                    })
                }), j.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(A.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: y
                    })
                }, `live-${a}`)), k && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: S,
                        onClose: y
                    })
                })]
            })
        }) : null, B ? (0, i.jsx)(p.A, {
            heading: x.intl.string(x.t.M0zgnT),
            introText: P ? x.intl.format(x.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(l.MzZ, {
                    href: o.A.getArticleURL(I.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: b.Ci,
                children: T.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(g.A, {
                        user: n,
                        entry: e,
                        onClose: y
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: v.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}