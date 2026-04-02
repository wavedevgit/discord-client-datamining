/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(397927),
    s = t(517164),
    r = t(290863),
    d = t(461213),
    o = t(975571),
    c = t(622543),
    u = t(146655),
    A = t(489379),
    _ = t(900179),
    p = t(837924),
    x = t(558628),
    g = t(842241),
    m = t(282797),
    I = t(518477),
    f = t(652215),
    b = t(985018),
    h = t(575877),
    j = t(643146);

function v(e) {
    let {
        user: n,
        currentUser: t,
        guildId: v,
        onClose: C
    } = e, {
        live: N,
        recent: y,
        stream: E
    } = (0, u.A)(n.id), {
        voiceChannel: T,
        voiceActivity: L
    } = (0, A.A)({
        userId: n.id,
        guildId: v
    }), O = (0, l.bG)([s.A], () => s.A.isFetchingUserOutbox(n.id)), S = n.id === t.id, P = (0, l.bG)([d.A, r.A], () => {
        let e = S ? d.A.getStatus() : r.A.getStatus(n.id);
        return e === a.clD.OFFLINE || e === a.clD.INVISIBLE
    }), k = (0, l.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), B = N.length > 0 || null != E, M = !k && null == E && null == L && null != T, R = !P && (B || M), G = y.length > 0;
    return R || G || !O ? (0, i.jsxs)(a.IpV, {
        className: h.XG,
        fade: !0,
        children: [R ? (0, i.jsx)(_.A, {
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
                }), N.map((e, l) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: C
                    })
                }, `live-${l}`)), M && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: T,
                        onClose: C
                    })
                })]
            })
        }) : null, G ? (0, i.jsx)(_.A, {
            heading: b.intl.string(b.t.M0zgnT),
            introText: S ? b.intl.format(b.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(a.MzZ, {
                    href: o.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: I.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: h.Ci,
                children: y.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
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