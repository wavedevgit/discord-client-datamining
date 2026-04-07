/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    s = t(517164),
    r = t(290863),
    d = t(461213),
    o = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    A = t(900179),
    x = t(837924),
    p = t(558628),
    g = t(842241),
    m = t(282797),
    I = t(518477),
    f = t(652215),
    b = t(985018),
    h = t(575877),
    v = t(643146);

function j(e) {
    let {
        user: n,
        currentUser: t,
        guildId: j,
        onClose: C
    } = e, {
        live: y,
        recent: N,
        stream: E
    } = (0, u.A)(n.id), {
        voiceChannel: T,
        voiceActivity: L
    } = (0, _.A)({
        userId: n.id,
        guildId: j
    }), P = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(n.id)), O = n.id === t.id, S = (0, a.bG)([d.A, r.A], () => {
        let e = O ? d.A.getStatus() : r.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), k = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), B = y.length > 0 || null != E, M = !k && null == E && null == L && null != T, R = !S && (B || M), D = N.length > 0;
    return R || D || !P ? (0, i.jsxs)(l.IpV, {
        className: h.XG,
        fade: !0,
        children: [R ? (0, i.jsx)(A.A, {
            "aria-label": b.intl.string(b.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: h.Ci,
                children: [null != E && (0, i.jsx)("li", {
                    children: (0, i.jsx)(g.A, {
                        user: n,
                        currentUser: t,
                        stream: E,
                        onClose: C
                    })
                }), y.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: C
                    })
                }, `live-${a}`)), M && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: T,
                        onClose: C
                    })
                })]
            })
        }) : null, D ? (0, i.jsx)(A.A, {
            heading: b.intl.string(b.t.M0zgnT),
            introText: O ? b.intl.format(b.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(l.MzZ, {
                    href: o.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: I.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: h.Ci,
                children: N.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: v.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}