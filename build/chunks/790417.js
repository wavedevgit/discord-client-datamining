/** Chunk was on 94682 **/
/** chunk id: 790417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
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
    h = n(515054),
    x = n(518477),
    v = n(652215),
    _ = n(985018),
    I = n(897757);

function A(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: A,
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
        voiceChannel: k,
        voiceActivity: R
    } = (0, p.A)({
        userId: t.id,
        guildId: w
    }), D = (0, l.bG)([o.A], () => o.A.isFetchingUserOutbox(t.id)), L = t.id === n.id, G = (0, l.bG)([u.A, c.A], () => {
        let e = L ? u.A.getStatus() : c.A.getStatus(t.id);
        return e === i.clD.OFFLINE || e === i.clD.INVISIBLE
    }), U = T.length > 0 || null != C, M = S && null == C && null == R && null != k, F = !G && (U || M), B = N.length > 0;
    if (!F && !B && D) return (0, r.jsx)("div", {
        className: I.kR,
        children: Array.from({
            length: 8
        }).map((e, t) => (0, r.jsxs)("div", {
            className: I.kr,
            children: [(0, r.jsx)(s.FQ, {
                width: 60,
                opacity: .08
            }), (0, r.jsx)(s.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t))
    });
    if (!F && !B && !D) {
        var H;
        return L ? (0, r.jsx)(O.qv, {
            onClose: E
        }) : (0, r.jsx)(O.zf, {
            user: t,
            guildId: null != (H = null == A ? void 0 : A.guildId) ? H : w,
            channelId: P,
            onClose: E
        })
    }
    return (0, r.jsxs)(h.K, {
        className: I.XG,
        fade: !0,
        children: [F ? (0, r.jsx)(j.A, {
            heading: _.intl.string(_.t.J6STd9),
            children: (0, r.jsxs)("ul", {
                className: I.kR,
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
                        voiceChannel: k,
                        onClose: E
                    })
                })]
            })
        }) : null, B ? (0, r.jsx)(j.A, {
            heading: _.intl.string(_.t.jzgEoL),
            introText: L ? _.intl.format(_.t["4bk9Ak"], {
                learnMoreHook: (e, t) => (0, r.jsx)(i.MzZ, {
                    href: d.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, t)
            }) : void 0,
            scrollTargetId: x.bk.RECENT_ACTIVITY,
            children: (0, r.jsx)("ul", {
                className: I.kR,
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