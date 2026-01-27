/** Chunk was on 94682 **/
/** chunk id: 790417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(901517),
    o = n(517164),
    s = n(114212),
    c = n(290863),
    u = n(461213),
    d = n(975571),
    f = n(146655),
    p = n(489379),
    g = n(837924),
    m = n(558628),
    b = n(842241),
    y = n(282797),
    O = n(782505),
    j = n(83013),
    x = n(515054),
    h = n(518477),
    v = n(652215),
    _ = n(985018),
    A = n(897757);

function I(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: I,
        guildId: w,
        channelId: P,
        onClose: E
    } = e, {
        voiceActivityStatusEnabled: S
    } = (0, a.G)({
        location: "UserProfileModalV2Activity"
    }), {
        live: T,
        recent: N,
        stream: C
    } = (0, f.A)(t.id), {
        voiceChannel: D,
        voiceActivity: R
    } = (0, p.A)({
        userId: t.id,
        guildId: w
    }), k = (0, l.bG)([o.A], () => o.A.isFetchingUserOutbox(t.id)), G = t.id === n.id, L = (0, l.bG)([u.A, c.A], () => {
        let e = G ? u.A.getStatus() : c.A.getStatus(t.id);
        return e === i.clD.OFFLINE || e === i.clD.INVISIBLE
    }), U = T.length > 0 || null != C, M = S && null == C && null == R && null != D, F = !L && (U || M), B = N.length > 0;
    if (!F && !B && k) return (0, r.jsx)("div", {
        className: A.kR,
        children: Array.from({
            length: 8
        }).map((e, t) => (0, r.jsxs)("div", {
            className: A.kr,
            children: [(0, r.jsx)(s.FQ, {
                width: 60,
                opacity: .08
            }), (0, r.jsx)(s.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t))
    });
    if (!F && !B && !k) {
        var X;
        return G ? (0, r.jsx)(O.qv, {
            onClose: E
        }) : (0, r.jsx)(O.zf, {
            user: t,
            guildId: null != (X = null == I ? void 0 : I.guildId) ? X : w,
            channelId: P,
            onClose: E
        })
    }
    return (0, r.jsxs)(x.K, {
        className: A.XG,
        fade: !0,
        children: [F ? (0, r.jsx)(j.A, {
            heading: _.intl.string(_.t.J6STd9),
            children: (0, r.jsxs)("ul", {
                className: A.kR,
                children: [null != C && (0, r.jsx)("li", {
                    children: (0, r.jsx)(b.A, {
                        user: t,
                        currentUser: n,
                        stream: C,
                        onClose: E
                    })
                }), T.map((e, l) => (0, r.jsx)("li", {
                    children: (0, r.jsx)(g.A, {
                        user: t,
                        currentUser: n,
                        activity: e,
                        onClose: E
                    })
                }, "live-".concat(l))), M && (0, r.jsx)("li", {
                    children: (0, r.jsx)(y.A, {
                        user: t,
                        currentUser: n,
                        voiceChannel: D,
                        onClose: E
                    })
                })]
            })
        }) : null, B ? (0, r.jsx)(j.A, {
            heading: _.intl.string(_.t.jzgEoL),
            introText: G ? _.intl.format(_.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, r.jsx)(i.MzZ, {
                    href: d.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, r.jsx)("ul", {
                className: A.kR,
                children: N.map(e => (0, r.jsx)("li", {
                    children: (0, r.jsx)(m.A, {
                        user: t,
                        entry: e,
                        onClose: E
                    })
                }, e.id))
            })
        }) : null]
    })
}