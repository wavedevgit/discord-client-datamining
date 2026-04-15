/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => E
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(517164),
    s = t(290863),
    d = t(461213),
    o = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    p = t(900179),
    A = t(837924),
    g = t(558628),
    f = t(842241),
    m = t(282797),
    h = t(518477),
    x = t(652215),
    I = t(985018),
    b = t(575877),
    v = t(643146);

function E(e) {
    let {
        user: n,
        currentUser: t,
        guildId: E,
        onClose: j
    } = e, {
        live: y,
        recent: T,
        stream: N
    } = (0, u.A)(n.id), {
        voiceChannel: S,
        voiceActivity: C
    } = (0, _.A)({
        userId: n.id,
        guildId: E
    }), R = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(n.id)), P = n.id === t.id, L = (0, a.bG)([d.A, s.A], () => {
        let e = P ? d.A.getStatus() : s.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), O = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), D = y.length > 0 || null != N, k = !O && null == N && null == C && null != S, B = !L && (D || k), U = T.length > 0;
    return B || U || !R ? (0, i.jsxs)(l.IpV, {
        className: b.XG,
        fade: !0,
        children: [B ? (0, i.jsx)(p.A, {
            "aria-label": I.intl.string(I.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != N && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: n,
                        currentUser: t,
                        stream: N,
                        onClose: j
                    })
                }), y.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(A.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: j
                    })
                }, `live-${a}`)), k && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: S,
                        onClose: j
                    })
                })]
            })
        }) : null, U ? (0, i.jsx)(p.A, {
            heading: I.intl.string(I.t.M0zgnT),
            introText: P ? I.intl.format(I.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(l.MzZ, {
                    href: o.A.getArticleURL(x.MVz.ACTIVITY_STATUS_SETTINGS),
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
                        onClose: j
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: v.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}