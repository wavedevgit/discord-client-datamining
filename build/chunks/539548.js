/** chunk id: 539548 params = (module,exports,require) **/
i.d(n, {
    A: () => j
});
var t = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(517164),
    r = i(290863),
    d = i(461213),
    o = i(975571),
    c = i(622543),
    u = i(146655),
    _ = i(489379),
    A = i(900179),
    p = i(837924),
    x = i(558628),
    g = i(842241),
    m = i(282797),
    I = i(518477),
    f = i(652215),
    b = i(985018),
    h = i(575877),
    v = i(643146);

function j(e) {
    let {
        user: n,
        currentUser: i,
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
    }), P = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(n.id)), O = n.id === i.id, S = (0, a.bG)([d.A, r.A], () => {
        let e = O ? d.A.getStatus() : r.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), k = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), B = y.length > 0 || null != E, M = !k && null == E && null == L && null != T, R = !S && (B || M), D = N.length > 0;
    return R || D || !P ? (0, t.jsxs)(l.IpV, {
        className: h.XG,
        fade: !0,
        children: [R ? (0, t.jsx)(A.A, {
            "aria-label": b.intl.string(b.t.J6STd9),
            children: (0, t.jsxs)("ul", {
                className: h.Ci,
                children: [null != E && (0, t.jsx)("li", {
                    children: (0, t.jsx)(g.A, {
                        user: n,
                        currentUser: i,
                        stream: E,
                        onClose: C
                    })
                }), y.map((e, a) => (0, t.jsx)("li", {
                    children: (0, t.jsx)(p.A, {
                        user: n,
                        currentUser: i,
                        activity: e,
                        onClose: C
                    })
                }, `live-${a}`)), M && (0, t.jsx)("li", {
                    children: (0, t.jsx)(m.A, {
                        user: n,
                        currentUser: i,
                        voiceChannel: T,
                        onClose: C
                    })
                })]
            })
        }) : null, D ? (0, t.jsx)(A.A, {
            heading: b.intl.string(b.t.M0zgnT),
            introText: O ? b.intl.format(b.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, t.jsx)(l.MzZ, {
                    href: o.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: I.bk.RECENT_ACTIVITY,
            children: (0, t.jsx)("ul", {
                className: h.Ci,
                children: N.map(e => (0, t.jsx)("li", {
                    children: (0, t.jsx)(x.A, {
                        user: n,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, t.jsx)("div", {
        className: v.Ie,
        children: (0, t.jsx)(l.y$y, {})
    })
}