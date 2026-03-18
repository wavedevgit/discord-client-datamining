/** chunk id: 539548 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    a = n(517164),
    l = n(290863),
    o = n(461213),
    d = n(975571),
    c = n(622543),
    u = n(146655),
    _ = n(489379),
    A = n(900179),
    m = n(837924),
    x = n(558628),
    p = n(842241),
    f = n(282797),
    h = n(518477),
    g = n(652215),
    I = n(985018),
    j = n(78702),
    b = n(781425);

function v(e) {
    let {
        user: t,
        currentUser: n,
        guildId: v,
        onClose: C
    } = e, {
        live: N,
        recent: y,
        stream: E
    } = (0, u.A)(t.id), {
        voiceChannel: T,
        voiceActivity: L
    } = (0, _.A)({
        userId: t.id,
        guildId: v
    }), P = (0, s.bG)([a.A], () => a.A.isFetchingUserOutbox(t.id)), O = t.id === n.id, R = (0, s.bG)([o.A, l.A], () => {
        let e = O ? o.A.getStatus() : l.A.getStatus(t.id);
        return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
    }), S = (0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0), M = N.length > 0 || null != E, G = !S && null == E && null == L && null != T, k = !R && (M || G), B = y.length > 0;
    return k || B || !P ? (0, i.jsxs)(r.IpV, {
        className: j.XG,
        fade: !0,
        children: [k ? (0, i.jsx)(A.A, {
            "aria-label": I.intl.string(I.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: j.Ci,
                children: [null != E && (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: t,
                        currentUser: n,
                        stream: E,
                        onClose: C
                    })
                }), N.map((e, s) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: C
                    })
                }, `live-${s}`)), G && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: T,
                        onClose: C
                    })
                })]
            })
        }) : null, B ? (0, i.jsx)(A.A, {
            heading: I.intl.string(I.t.M0zgnT),
            introText: O ? I.intl.format(I.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, i.jsx)(r.MzZ, {
                    href: d.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: j.Ci,
                children: y.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: t,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: b.Ie,
        children: (0, i.jsx)(r.y$y, {})
    })
}