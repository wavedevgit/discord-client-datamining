/** chunk id: 268473, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => M
}), n(896048);
var s = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    l = n(311907),
    o = n(397927),
    c = n(736653),
    d = n(775602),
    u = n(793574),
    m = n(979286),
    x = n(607470),
    f = n(318346),
    h = n(761705),
    _ = n(106799),
    p = n(829219),
    j = n(341915),
    b = n(890687),
    g = n(92246),
    C = n(109174),
    v = n(524728),
    A = n(654487),
    y = n(652215),
    N = n(758836),
    O = n(985018),
    E = n(176741),
    L = n(627898),
    S = n(341744),
    R = n(484252),
    w = n(460290),
    T = n(181713);

function D(e) {
    let {
        onVideoLoaded: t
    } = e;
    return (0, s.jsx)(x.A, {
        className: E.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, s.jsx)("source", {
            src: T.A,
            type: "video/webm"
        })
    })
}

function P(e) {
    let {
        onVideoLoaded: t,
        isLoading: n
    } = e, r = (0, l.bG)([d.A], () => d.A.useReducedMotion), [u, m] = a.useState(!r), f = (0, c.Ay)(), h = (0, o.qB1)(f), _ = h ? S.A : L.A, p = h ? w.A : R.A, j = a.useRef(null), b = a.useRef(null), [g, C] = a.useState(!1), [v, A] = a.useState(!1), [y, N] = a.useState(!1);
    a.useEffect(() => {
        g && v && y && t()
    }, [g, v, y, t]), a.useEffect(() => {
        n || r || setTimeout(() => {
            var e;
            null == (e = j.current) || e.play()
        }, 200)
    }, [n, r]);
    let O = a.useCallback(() => {
        if (!r) {
            var e;
            m(!1), null == (e = b.current) || e.play()
        }
    }, [r]);
    return (0, s.jsxs)("div", {
        className: E.GF,
        children: [(0, s.jsx)(x.A, {
            ref: b,
            autoPlay: !1,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: i()(E.nH, E.EZ, {
                [E.R]: u
            }),
            controls: !1,
            onCanPlayThrough: a.useCallback(() => A(!0), []),
            children: (0, s.jsx)("source", {
                src: p,
                type: "video/webm"
            })
        }), (0, s.jsx)(x.A, {
            ref: j,
            autoPlay: !1,
            muted: !0,
            playsInline: !0,
            className: E.nH,
            controls: !1,
            onCanPlayThrough: a.useCallback(() => C(!0), []),
            onEnded: O,
            children: (0, s.jsx)("source", {
                src: _,
                type: "video/webm"
            })
        }), (0, s.jsxs)("div", {
            className: E.Se,
            children: [(0, s.jsx)(D, {
                onVideoLoaded: a.useCallback(() => N(!0), [])
            }), (0, s.jsx)(D, {}), (0, s.jsx)(D, {}), (0, s.jsx)(D, {})]
        })]
    })
}

function k(e) {
    let {
        isLoading: t,
        onClose: n,
        orbsEarned: a,
        orbsBalance: r,
        onVideoLoaded: i
    } = e, l = async () => {
        (0, f.Y)({
            pageType: y.liQ.GLOBAL_DISCOVERY_QUESTS,
            sectionType: y.JJy.ORBS_REWARD_MODAL,
            ctaObject: y.ZSU.CTA_TO_ORBS_SHOP
        }), await n(), (0, m.Cz)({
            tab: N.G2.ORBS,
            analyticsLocations: [],
            analyticsSource: u.A.QUEST_REWARD_MODAL
        })
    };
    return (0, s.jsxs)("div", {
        className: E.hQ,
        children: [(0, s.jsx)(P, {
            isLoading: t,
            onVideoLoaded: i
        }), (0, s.jsxs)("div", {
            className: E.dD,
            children: [(0, s.jsxs)("div", {
                className: E.R_,
                children: [(0, s.jsx)(_.B, {
                    shouldUseThemeColor: !0,
                    className: E.Uu
                }), (0, s.jsx)(o.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: O.intl.formatToPlainString(O.t.YMor7k, {
                        count: a
                    })
                })]
            }), null != r ? (0, s.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: O.intl.format(O.t.g4t9aw, {
                    orbsBalance: r,
                    orbsBalanceHook: (e, t) => (0, s.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        tag: "span",
                        children: e
                    }, t)
                })
            }) : null]
        }), (0, s.jsx)(o.Button, {
            variant: "secondary",
            size: "sm",
            text: O.intl.string(O.t.WYchde),
            onClick: l,
            fullWidth: !0
        })]
    })
}

function M(e) {
    var t, n;
    let {
        initialQuest: r,
        onClose: i,
        transitionState: l,
        sourceQuestContent: o,
        location: c
    } = e, d = null != (t = (0, b.C5)(r.id)) ? t : r, u = (null == (n = d.userStatus) ? void 0 : n.claimedAt) != null, {
        balance: m,
        error: x
    } = (0, h.W)(), f = (0, g._Z)(d.config), [_, y] = a.useState(u ? "success" : "loading"), [N, E] = a.useState(!1), L = a.useCallback(() => {
        E(!0)
    }, []);
    a.useEffect(() => {
        u || "loading" !== _ || (0, p.Oq)(d.id, j.pY.CROSS_PLATFORM, c).then(() => y("success")).catch(() => y("error"))
    }, [d.id, u, _, c]);
    let S = !N || "loading" === _ || null == m && null == x,
        R = "error" === _ || null == f || null == m && null != x;
    return (0, s.jsx)(v.A, {
        onClose: i,
        transitionState: l,
        quest: d,
        sourceQuestContent: o,
        location: A.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: S,
        rewardContentHasError: R,
        rewardContent: R ? null : (0, s.jsx)(C.A, {
            rewardName: O.intl.string(O.t.Lmysvd),
            children: (0, s.jsx)(k, {
                onClose: i,
                orbsEarned: f,
                orbsBalance: m,
                isLoading: S,
                onVideoLoaded: L
            })
        })
    })
}