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
    d = t(461213),
    o = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    p = t(900179),
    A = t(837924),
    g = t(558628),
    I = t(842241),
    m = t(282797),
    f = t(518477),
    x = t(652215),
    h = t(985018),
    v = t(379704),
    E = t(272823);

function b(e) {
    let {
        user: n,
        currentUser: t,
        guildId: b,
        onClose: y
    } = e, {
        live: j,
        recent: T,
        stream: N
    } = (0, u.A)(n.id), {
        voiceChannel: S,
        voiceActivity: C
    } = (0, _.A)({
        userId: n.id,
        guildId: b
    }), R = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(n.id)), L = n.id === t.id, P = (0, a.bG)([d.A, s.A], () => {
        let e = L ? d.A.getStatus() : s.A.getStatus(n.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), O = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), D = j.length > 0 || null != N, U = !O && null == N && null == C && null != S, k = !P && (D || U), B = T.length > 0;
    return k || B || !R ? (0, i.jsxs)(l.IpV, {
        className: v.XG,
        fade: !0,
        children: [k ? (0, i.jsx)(p.A, {
            "aria-label": h.intl.string(h.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: v.Ci,
                children: [null != N && (0, i.jsx)("li", {
                    children: (0, i.jsx)(I.A, {
                        user: n,
                        currentUser: t,
                        stream: N,
                        onClose: y
                    })
                }), j.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(A.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: y
                    })
                }, `live-${a}`)), U && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: S,
                        onClose: y
                    })
                })]
            })
        }) : null, B ? (0, i.jsx)(p.A, {
            heading: h.intl.string(h.t.M0zgnT),
            introText: L ? h.intl.format(h.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(l.MzZ, {
                    href: o.A.getArticleURL(x.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: f.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: v.Ci,
                children: T.map(e => (0, i.jsx)("li", {
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