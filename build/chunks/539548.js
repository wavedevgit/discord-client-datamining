/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => C
});
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    r = t(517164),
    a = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    A = t(489379),
    _ = t(900179),
    x = t(837924),
    p = t(558628),
    m = t(842241),
    I = t(282797),
    f = t(518477),
    g = t(652215),
    h = t(985018),
    b = t(575877),
    j = t(643146);

function C(e) {
    let {
        user: n,
        currentUser: t,
        guildId: C,
        onClose: E
    } = e, {
        live: N,
        recent: v,
        stream: T
    } = (0, u.A)(n.id), {
        voiceChannel: y,
        voiceActivity: L
    } = (0, A.A)({
        userId: n.id,
        guildId: C
    }), P = (0, s.bG)([r.A], () => r.A.isFetchingUserOutbox(n.id)), O = n.id === t.id, S = (0, s.bG)([o.A, a.A], () => {
        let e = O ? o.A.getStatus() : a.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), R = (0, s.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), M = N.length > 0 || null != T, B = !R && null == T && null == L && null != y, k = !S && (M || B), D = v.length > 0;
    return k || D || !P ? (0, i.jsxs)(l.IpV, {
        className: b.XG,
        fade: !0,
        children: [k ? (0, i.jsx)(_.A, {
            "aria-label": h.intl.string(h.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != T && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        stream: T,
                        onClose: E
                    })
                }), N.map((e, s) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: E
                    })
                }, `live-${s}`)), B && (0, i.jsx)("li", {
                    children: (0, i.jsx)(I.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: y,
                        onClose: E
                    })
                })]
            })
        }) : null, D ? (0, i.jsx)(_.A, {
            heading: h.intl.string(h.t.M0zgnT),
            introText: O ? h.intl.format(h.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(l.MzZ, {
                    href: d.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: f.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: b.Ci,
                children: v.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        entry: e,
                        onClose: E
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: j.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}