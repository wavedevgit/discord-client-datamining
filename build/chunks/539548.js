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
    d = n(461213),
    c = n(975571),
    u = n(146655),
    p = n(489379),
    f = n(900179),
    m = n(837924),
    A = n(558628),
    x = n(842241),
    g = n(282797),
    j = n(518477),
    h = n(652215),
    b = n(985018),
    v = n(78702),
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
        stream: P
    } = (0, u.A)(t.id), {
        voiceChannel: T,
        voiceActivity: C
    } = (0, p.A)({
        userId: t.id,
        guildId: y
    }), S = (0, i.bG)([o.A], () => o.A.isFetchingUserOutbox(t.id)), L = t.id === n.id, R = (0, i.bG)([d.A, a.A], () => {
        let e = L ? d.A.getStatus() : a.A.getStatus(t.id);
        return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
    }), D = N.length > 0 || null != P, w = O && null == P && null == C && null != T, M = !R && (D || w), G = E.length > 0;
    return M || G || !S ? (0, l.jsxs)(r.IpV, {
        className: v.XG,
        fade: !0,
        children: [M ? (0, l.jsx)(f.A, {
            "aria-label": b.intl.string(b.t.J6STd9),
            children: (0, l.jsxs)("ul", {
                className: v.Ci,
                children: [null != P && (0, l.jsx)("li", {
                    children: (0, l.jsx)(x.A, {
                        user: t,
                        currentUser: n,
                        stream: P,
                        onClose: _
                    })
                }), N.map((e, i) => (0, l.jsx)("li", {
                    children: (0, l.jsx)(m.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: _
                    })
                }, "live-".concat(i))), w && (0, l.jsx)("li", {
                    children: (0, l.jsx)(g.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: T,
                        onClose: _
                    })
                })]
            })
        }) : null, G ? (0, l.jsx)(f.A, {
            heading: b.intl.string(b.t.M0zgnT),
            introText: L ? b.intl.format(b.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, l.jsx)(r.MzZ, {
                    href: c.A.getArticleURL(h.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: j.bk.RECENT_ACTIVITY,
            children: (0, l.jsx)("ul", {
                className: v.Ci,
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