/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    l = t(517164),
    r = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    A = t(900179),
    x = t(837924),
    p = t(558628),
    g = t(842241),
    I = t(282797),
    m = t(518477),
    f = t(652215),
    h = t(985018),
    b = t(575877),
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
    } = (0, _.A)({
        userId: n.id,
        guildId: v
    }), O = (0, a.bG)([l.A], () => l.A.isFetchingUserOutbox(n.id)), S = n.id === t.id, P = (0, a.bG)([o.A, r.A], () => {
        let e = S ? o.A.getStatus() : r.A.getStatus(n.id);
        return e === s.clD.OFFLINE || e === s.clD.INVISIBLE
    }), k = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), R = N.length > 0 || null != E, B = !k && null == E && null == L && null != T, M = !P && (R || B), G = y.length > 0;
    return M || G || !O ? (0, i.jsxs)(s.IpV, {
        className: b.XG,
        fade: !0,
        children: [M ? (0, i.jsx)(A.A, {
            "aria-label": h.intl.string(h.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != E && (0, i.jsx)("li", {
                    children: (0, i.jsx)(g.A, {
                        user: n,
                        currentUser: t,
                        stream: E,
                        onClose: C
                    })
                }), N.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: C
                    })
                }, `live-${a}`)), B && (0, i.jsx)("li", {
                    children: (0, i.jsx)(I.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: T,
                        onClose: C
                    })
                })]
            })
        }) : null, G ? (0, i.jsx)(A.A, {
            heading: h.intl.string(h.t.M0zgnT),
            introText: S ? h.intl.format(h.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(s.MzZ, {
                    href: d.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: m.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: b.Ci,
                children: y.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: j.Ie,
        children: (0, i.jsx)(s.y$y, {})
    })
}