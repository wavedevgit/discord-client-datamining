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
    u = t(146655),
    _ = t(489379),
    p = t(900179),
    A = t(837924),
    g = t(558628),
    f = t(842241),
    h = t(282797),
    m = t(518477),
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
        stream: S
    } = (0, u.A)(n.id), {
        voiceChannel: N,
        voiceActivity: C
    } = (0, _.A)({
        userId: n.id,
        guildId: E
    }), R = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(n.id)), P = n.id === t.id, L = (0, a.bG)([s.A, d.A], () => {
        let e = P ? s.A.getStatus() : d.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), O = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), D = y.length > 0 || null != S, k = !O && null == S && null == C && null != N, B = !L && (D || k), U = T.length > 0;
    return B || U || !R ? (0, i.jsxs)(l.IpV, {
        className: b.XG,
        fade: !0,
        children: [B ? (0, i.jsx)(p.A, {
            "aria-label": I.intl.string(I.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != S && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: n,
                        currentUser: t,
                        stream: S,
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
                    children: (0, i.jsx)(h.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: N,
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
            scrollTargetId: m.bk.RECENT_ACTIVITY,
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