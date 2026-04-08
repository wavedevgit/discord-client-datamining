/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(517164),
    s = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    p = t(900179),
    A = t(837924),
    g = t(558628),
    m = t(842241),
    I = t(282797),
    f = t(518477),
    h = t(652215),
    x = t(985018),
    v = t(575877),
    E = t(643146);

function b(e) {
    let {
        user: n,
        currentUser: t,
        guildId: b,
        onClose: C
    } = e, {
        live: y,
        recent: T,
        stream: j
    } = (0, u.A)(n.id), {
        voiceChannel: S,
        voiceActivity: N
    } = (0, _.A)({
        userId: n.id,
        guildId: b
    }), R = (0, a.bG)([l.A], () => l.A.isFetchingUserOutbox(n.id)), L = n.id === t.id, P = (0, a.bG)([o.A, s.A], () => {
        let e = L ? o.A.getStatus() : s.A.getStatus(n.id);
        return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
    }), O = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), U = y.length > 0 || null != j, k = !O && null == j && null == N && null != S, D = !P && (U || k), B = T.length > 0;
    return D || B || !R ? (0, i.jsxs)(r.IpV, {
        className: v.XG,
        fade: !0,
        children: [D ? (0, i.jsx)(p.A, {
            "aria-label": x.intl.string(x.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: v.Ci,
                children: [null != j && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        stream: j,
                        onClose: C
                    })
                }), y.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(A.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: C
                    })
                }, `live-${a}`)), k && (0, i.jsx)("li", {
                    children: (0, i.jsx)(I.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: S,
                        onClose: C
                    })
                })]
            })
        }) : null, B ? (0, i.jsx)(p.A, {
            heading: x.intl.string(x.t.M0zgnT),
            introText: L ? x.intl.format(x.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(r.MzZ, {
                    href: d.A.getArticleURL(h.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: f.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: v.Ci,
                children: T.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(g.A, {
                        user: n,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: E.Ie,
        children: (0, i.jsx)(r.y$y, {})
    })
}