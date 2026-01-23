/** Chunk was on 64228 **/
/** chunk id: 539548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    s = n(901517),
    o = n(517164),
    a = n(290863),
    c = n(461213),
    d = n(975571),
    u = n(146655),
    p = n(489379),
    m = n(900179),
    f = n(837924),
    A = n(558628),
    x = n(842241),
    j = n(282797),
    h = n(518477),
    g = n(652215),
    v = n(985018),
    b = n(78702),
    I = n(781425);

function y(e) {
    let {
        user: t,
        currentUser: n,
        guildId: y,
        onClose: _
    } = e, {
        voiceActivityStatusEnabled: O
    } = (0, s.G)({
        location: "UserProfileModalActivity"
    }), {
        live: N,
        recent: E,
        stream: T
    } = (0, u.A)(t.id), {
        voiceChannel: P,
        voiceActivity: C
    } = (0, p.A)({
        userId: t.id,
        guildId: y
    }), S = (0, i.bG)([o.A], () => o.A.isFetchingUserOutbox(t.id)), L = t.id === n.id, R = (0, i.bG)([c.A, a.A], () => {
        let e = L ? c.A.getStatus() : a.A.getStatus(t.id);
        return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
    }), D = N.length > 0 || null != T, w = O && null == T && null == C && null != P, M = !R && (D || w), G = E.length > 0;
    return M || G || !S ? (0, l.jsxs)(r.IpV, {
        className: b.XG,
        fade: !0,
        children: [M ? (0, l.jsx)(m.A, {
            "aria-label": v.intl.string(v.t.J6STd9),
            children: (0, l.jsxs)("ul", {
                className: b.Ci,
                children: [null != T && (0, l.jsx)("li", {
                    children: (0, l.jsx)(x.A, {
                        user: t,
                        currentUser: n,
                        stream: T,
                        onClose: _
                    })
                }), N.map((e, i) => (0, l.jsx)("li", {
                    children: (0, l.jsx)(f.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: _
                    })
                }, "live-".concat(i))), w && (0, l.jsx)("li", {
                    children: (0, l.jsx)(j.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: P,
                        onClose: _
                    })
                })]
            })
        }) : null, G ? (0, l.jsx)(m.A, {
            heading: v.intl.string(v.t.M0zgnT),
            introText: L ? v.intl.format(v.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, l.jsx)(r.MzZ, {
                    href: d.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, l.jsx)("ul", {
                className: b.Ci,
                children: E.map(e => (0, l.jsx)("li", {
                    children: (0, l.jsx)(A.A, {
                        user: t,
                        entry: e,
                        onClose: _
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, l.jsx)("div", {
        className: I.Ie,
        children: (0, l.jsx)(r.y$y, {})
    })
}