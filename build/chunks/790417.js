/** chunk id: 790417 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(517164),
    r = n(114212),
    o = n(290863),
    d = n(461213),
    c = n(975571),
    u = n(146655),
    g = n(489379),
    m = n(837924),
    p = n(558628),
    x = n(842241),
    f = n(282797),
    h = n(782505),
    _ = n(83013),
    A = n(515054),
    I = n(518477),
    j = n(652215),
    E = n(985018),
    v = n(203983);

function T(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: T,
        guildId: b,
        channelId: C,
        onClose: S
    } = e, {
        live: N,
        recent: y,
        stream: R
    } = (0, u.A)(t.id), {
        voiceChannel: O,
        voiceActivity: k
    } = (0, g.A)({
        userId: t.id,
        guildId: b
    }), L = (0, l.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)), w = t.id === n.id, P = (0, l.bG)([d.A, o.A], () => {
        let e = w ? d.A.getStatus() : o.A.getStatus(t.id);
        return e === a.clD.OFFLINE || e === a.clD.INVISIBLE
    }), D = N.length > 0 || null != R, G = T?.private !== !0 && null == R && null == k && null != O, F = !P && (D || G), U = y.length > 0;
    return F || U || !L ? F || U || L ? (0, i.jsxs)(A.K, {
        className: v.XG,
        fade: !0,
        children: [F ? (0, i.jsx)(_.A, {
            heading: E.intl.string(E.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: v.kR,
                children: [null != R && (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: t,
                        currentUser: n,
                        stream: R,
                        onClose: S
                    })
                }), N.map((e, l) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: S
                    })
                }, `live-${l}`)), G && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: O,
                        onClose: S
                    })
                })]
            })
        }) : null, U ? (0, i.jsx)(_.A, {
            heading: E.intl.string(E.t.jzgEoL),
            introText: w ? E.intl.format(E.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, i.jsx)(a.MzZ, {
                    href: c.A.getArticleURL(j.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: I.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: v.kR,
                children: y.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: t,
                        entry: e,
                        onClose: S
                    })
                }, e.id))
            })
        }) : null]
    }) : w ? (0, i.jsx)(h.qv, {
        onClose: S
    }) : (0, i.jsx)(h.zf, {
        user: t,
        guildId: T?.guildId ?? b,
        channelId: C,
        onClose: S
    }) : (0, i.jsx)("div", {
        className: v.kR,
        children: Array.from({
            length: 8
        }).map((e, t) => (0, i.jsxs)("div", {
            className: v.kr,
            children: [(0, i.jsx)(r.FQ, {
                width: 60,
                opacity: .08
            }), (0, i.jsx)(r.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t))
    })
}