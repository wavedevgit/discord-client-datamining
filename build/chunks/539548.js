/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => E
});
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(517164),
    o = t(290863),
    s = t(461213),
    d = t(975571),
    c = t(622543),
    _ = t(146655),
    u = t(489379),
    p = t(900179),
    A = t(837924),
    g = t(558628),
    m = t(842241),
    f = t(282797),
    h = t(518477),
    x = t(652215),
    I = t(985018),
    b = t(379704),
    v = t(272823);

function E(e) {
    let {
        user: n,
        currentUser: t,
        guildId: E,
        onClose: j
    } = e, {
        live: y,
        recent: C,
        stream: T
    } = (0, _.A)(n.id), {
        voiceChannel: S,
        voiceActivity: N
    } = (0, u.A)({
        userId: n.id,
        guildId: E
    }), R = (0, a.bG)([l.A], () => l.A.isFetchingUserOutbox(n.id)), L = n.id === t.id, P = (0, a.bG)([s.A, o.A], () => {
        let e = L ? s.A.getStatus() : o.A.getStatus(n.id);
        return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
    }), D = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), O = y.length > 0 || null != T, k = !D && null == T && null == N && null != S, B = !P && (O || k), U = C.length > 0;
    return B || U || !R ? (0, i.jsxs)(r.IpV, {
        className: b.XG,
        fade: !0,
        children: [B ? (0, i.jsx)(p.A, {
            "aria-label": I.intl.string(I.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != T && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        stream: T,
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
                    children: (0, i.jsx)(f.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: S,
                        onClose: j
                    })
                })]
            })
        }) : null, U ? (0, i.jsx)(p.A, {
            heading: I.intl.string(I.t.M0zgnT),
            introText: L ? I.intl.format(I.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(r.MzZ, {
                    href: d.A.getArticleURL(x.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: b.Ci,
                children: C.map(e => (0, i.jsx)("li", {
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
        children: (0, i.jsx)(r.y$y, {})
    })
}