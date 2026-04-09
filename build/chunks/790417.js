/** chunk id: 790417 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(397927),
    s = n(517164),
    r = n(114212),
    o = n(290863),
    d = n(461213),
    c = n(975571),
    u = n(146655),
    g = n(489379),
    m = n(837924),
    h = n(558628),
    x = n(842241),
    p = n(282797),
    f = n(782505),
    A = n(83013),
    _ = n(515054),
    I = n(518477),
    j = n(652215),
    v = n(985018),
    b = n(203983);

function S(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: S,
        guildId: y,
        channelId: E,
        onClose: C
    } = e, {
        live: T,
        recent: w,
        stream: N
    } = (0, u.A)(t.id), {
        voiceChannel: k,
        voiceActivity: R
    } = (0, g.A)({
        userId: t.id,
        guildId: y
    }), L = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)), O = t.id === n.id, M = (0, a.bG)([d.A, o.A], () => {
        let e = O ? d.A.getStatus() : o.A.getStatus(t.id);
        return e === l.clD.OFFLINE || e === l.clD.INVISIBLE
    }), P = T.length > 0 || null != N, G = S?.private !== !0 && null == N && null == R && null != k, U = !M && (P || G), F = w.length > 0;
    return U || F || !L ? U || F || L ? (0, i.jsxs)(_.K, {
        className: b.XG,
        fade: !0,
        children: [U ? (0, i.jsx)(A.A, {
            heading: v.intl.string(v.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.kR,
                children: [null != N && (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: t,
                        currentUser: n,
                        stream: N,
                        onClose: C
                    })
                }), T.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: C
                    })
                }, `live-${a}`)), G && (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: k,
                        onClose: C
                    })
                })]
            })
        }) : null, F ? (0, i.jsx)(A.A, {
            heading: v.intl.string(v.t.jzgEoL),
            introText: O ? v.intl.format(v.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, i.jsx)(l.MzZ, {
                    href: c.A.getArticleURL(j.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: I.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: b.kR,
                children: w.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(h.A, {
                        user: t,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : O ? (0, i.jsx)(f.qv, {
        onClose: C
    }) : (0, i.jsx)(f.zf, {
        user: t,
        guildId: S?.guildId ?? y,
        channelId: E,
        onClose: C
    }) : (0, i.jsx)("div", {
        className: b.kR,
        children: Array.from({
            length: 8
        }).map((e, t) => (0, i.jsxs)("div", {
            className: b.kr,
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