/** chunk id: 539548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(517164),
    a = n(290863),
    d = n(461213),
    o = n(975571),
    c = n(622543),
    u = n(146655),
    A = n(489379),
    x = n(900179),
    _ = n(837924),
    m = n(558628),
    p = n(842241),
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
        onClose: v
    } = e, {
        live: E,
        recent: T,
        stream: C
    } = (0, u.A)(t.id), {
        voiceChannel: y,
        voiceActivity: L
    } = (0, A.A)({
        userId: t.id,
        guildId: N
    }), S = (0, s.bG)([r.A], () => r.A.isFetchingUserOutbox(t.id)), O = t.id === n.id, P = (0, s.bG)([d.A, a.A], () => {
        let e = O ? d.A.getStatus() : a.A.getStatus(t.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), R = (0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0), M = E.length > 0 || null != C, G = !R && null == C && null == L && null != y, k = !P && (M || G), D = T.length > 0;
    return k || D || !S ? (0, i.jsxs)(l.IpV, {
        className: j.XG,
        fade: !0,
        children: [k ? (0, i.jsx)(x.A, {
            "aria-label": g.intl.string(g.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: j.Ci,
                children: [null != C && (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: t,
                        currentUser: n,
                        stream: C,
                        onClose: v
                    })
                }), E.map((e, s) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(_.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: v
                    })
                }, `live-${s}`)), G && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: y,
                        onClose: v
                    })
                })]
            })
        }) : null, D ? (0, i.jsx)(x.A, {
            heading: g.intl.string(g.t.M0zgnT),
            introText: O ? g.intl.format(g.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, i.jsx)(l.MzZ, {
                    href: o.A.getArticleURL(I.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: j.Ci,
                children: T.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: t,
                        entry: e,
                        onClose: v
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: b.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}