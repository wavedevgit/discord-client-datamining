/** chunk id: 539548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(517164),
    r = n(290863),
    d = n(461213),
    o = n(975571),
    c = n(622543),
    u = n(146655),
    A = n(489379),
    _ = n(900179),
    x = n(837924),
    p = n(558628),
    m = n(842241),
    f = n(282797),
    h = n(518477),
    I = n(652215),
    g = n(985018),
    j = n(78702),
    b = n(781425);

function N(e) {
    let {
        user: t,
        currentUser: n,
        guildId: N,
        onClose: C
    } = e, {
        live: E,
        recent: v,
        stream: T
    } = (0, u.A)(t.id), {
        voiceChannel: y,
        voiceActivity: L
    } = (0, A.A)({
        userId: t.id,
        guildId: N
    }), O = (0, s.bG)([a.A], () => a.A.isFetchingUserOutbox(t.id)), S = t.id === n.id, P = (0, s.bG)([d.A, r.A], () => {
        let e = S ? d.A.getStatus() : r.A.getStatus(t.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), M = (0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0), R = E.length > 0 || null != T, G = !M && null == T && null == L && null != y, k = !P && (R || G), D = v.length > 0;
    return k || D || !O ? (0, i.jsxs)(l.IpV, {
        className: j.XG,
        fade: !0,
        children: [k ? (0, i.jsx)(_.A, {
            "aria-label": g.intl.string(g.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: j.Ci,
                children: [null != T && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: t,
                        currentUser: n,
                        stream: T,
                        onClose: C
                    })
                }), E.map((e, s) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: C
                    })
                }, `live-${s}`)), G && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: y,
                        onClose: C
                    })
                })]
            })
        }) : null, D ? (0, i.jsx)(_.A, {
            heading: g.intl.string(g.t.M0zgnT),
            introText: S ? g.intl.format(g.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, i.jsx)(l.MzZ, {
                    href: o.A.getArticleURL(I.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: j.Ci,
                children: v.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: t,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: b.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}