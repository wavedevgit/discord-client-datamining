/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(517164),
    s = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    p = t(900179),
    A = t(837924),
    g = t(558628),
    I = t(842241),
    m = t(282797),
    f = t(518477),
    h = t(652215),
    x = t(985018),
    v = t(379704),
    E = t(272823);

function b(e) {
    let {
        user: n,
        currentUser: t,
        guildId: b,
        onClose: y
    } = e, {
        live: C,
        recent: j,
        stream: S
    } = (0, u.A)(n.id), {
        voiceChannel: T,
        voiceActivity: N
    } = (0, _.A)({
        userId: n.id,
        guildId: b
    }), R = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(n.id)), L = n.id === t.id, P = (0, a.bG)([o.A, s.A], () => {
        let e = L ? o.A.getStatus() : s.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), O = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), k = C.length > 0 || null != S, D = !O && null == S && null == N && null != T, U = !P && (k || D), B = j.length > 0;
    return U || B || !R ? (0, i.jsxs)(l.IpV, {
        className: v.XG,
        fade: !0,
        children: [U ? (0, i.jsx)(p.A, {
            "aria-label": x.intl.string(x.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: v.Ci,
                children: [null != S && (0, i.jsx)("li", {
                    children: (0, i.jsx)(I.A, {
                        user: n,
                        currentUser: t,
                        stream: S,
                        onClose: y
                    })
                }), C.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(A.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: y
                    })
                }, `live-${a}`)), D && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: T,
                        onClose: y
                    })
                })]
            })
        }) : null, B ? (0, i.jsx)(p.A, {
            heading: x.intl.string(x.t.M0zgnT),
            introText: L ? x.intl.format(x.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(l.MzZ, {
                    href: d.A.getArticleURL(h.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: f.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: v.Ci,
                children: j.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(g.A, {
                        user: n,
                        entry: e,
                        onClose: y
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: E.Ie,
        children: (0, i.jsx)(l.y$y, {})
    })
}