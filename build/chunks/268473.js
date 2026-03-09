/** chunk id: 268473 params = (module,exports,require) **/
n.d(t, {
    default: () => I
});
var a = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    l = n(311907),
    o = n(397927),
    c = n(736653),
    d = n(775602),
    u = n(793574),
    m = n(979286),
    x = n(607470),
    f = n(318346),
    _ = n(761705),
    h = n(106799),
    p = n(829219),
    g = n(341915),
    j = n(890687),
    C = n(92246),
    A = n(109174),
    b = n(524728),
    v = n(654487),
    y = n(652215),
    N = n(758836),
    E = n(985018),
    L = n(351127),
    R = n(627898),
    S = n(341744),
    T = n(484252),
    O = n(460290),
    w = n(181713);

function k(e) {
    let {
        onVideoLoaded: t
    } = e;
    return (0, a.jsx)(x.A, {
        className: L.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, a.jsx)("source", {
            src: w.A,
            type: "video/webm"
        })
    })
}

function D(e) {
    let {
        onVideoLoaded: t,
        isLoading: n
    } = e, i = (0, l.bG)([d.A], () => d.A.useReducedMotion), [u, m] = s.useState(!i), f = (0, c.Ay)(), _ = (0, o.qB1)(f), h = _ ? S.A : R.A, p = _ ? O.A : T.A, g = s.useRef(null), j = s.useRef(null), [C, A] = s.useState(!1), [b, v] = s.useState(!1), [y, N] = s.useState(!1);
    s.useEffect(() => {
        C && b && y && t()
    }, [C, b, y, t]), s.useEffect(() => {
        n || i || setTimeout(() => {
            g.current?.play()
        }, 200)
    }, [n, i]);
    let E = s.useCallback(() => {
        i || (m(!1), j.current?.play())
    }, [i]);
    return (0, a.jsxs)("div", {
        className: L.GF,
        children: [(0, a.jsx)(x.A, {
            ref: j,
            autoPlay: !1,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r()(L.nH, L.EZ, {
                [L.R]: u
            }),
            controls: !1,
            onCanPlayThrough: s.useCallback(() => v(!0), []),
            children: (0, a.jsx)("source", {
                src: p,
                type: "video/webm"
            })
        }), (0, a.jsx)(x.A, {
            ref: g,
            autoPlay: !1,
            muted: !0,
            playsInline: !0,
            className: L.nH,
            controls: !1,
            onCanPlayThrough: s.useCallback(() => A(!0), []),
            onEnded: E,
            children: (0, a.jsx)("source", {
                src: h,
                type: "video/webm"
            })
        }), (0, a.jsxs)("div", {
            className: L.Se,
            children: [(0, a.jsx)(k, {
                onVideoLoaded: s.useCallback(() => N(!0), [])
            }), (0, a.jsx)(k, {}), (0, a.jsx)(k, {}), (0, a.jsx)(k, {})]
        })]
    })
}

function W(e) {
    let {
        isLoading: t,
        onClose: n,
        orbsEarned: s,
        orbsBalance: i,
        onVideoLoaded: r
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
    return (0, a.jsxs)("div", {
        className: L.hQ,
        children: [(0, a.jsx)(D, {
            isLoading: t,
            onVideoLoaded: r
        }), (0, a.jsxs)("div", {
            className: L.dD,
            children: [(0, a.jsxs)("div", {
                className: L.R_,
                children: [(0, a.jsx)(h.B, {
                    shouldUseThemeColor: !0,
                    className: L.Uu
                }), (0, a.jsx)(o.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: E.intl.formatToPlainString(E.t.YMor7k, {
                        count: s
                    })
                })]
            }), null != i ? (0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: E.intl.format(E.t.g4t9aw, {
                    orbsBalance: i,
                    orbsBalanceHook: (e, t) => (0, a.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        tag: "span",
                        children: e
                    }, t)
                })
            }) : null]
        }), (0, a.jsx)(o.Button, {
            variant: "secondary",
            size: "sm",
            text: E.intl.string(E.t.WYchde),
            onClick: l,
            fullWidth: !0
        })]
    })
}

function I(e) {
    let {
        initialQuest: t,
        onClose: n,
        transitionState: i,
        sourceQuestContent: r,
        location: l
    } = e, o = (0, j.C5)(t.id) ?? t, c = o.userStatus?.claimedAt != null, {
        balance: d,
        error: u
    } = (0, _.W)(), m = (0, C._Z)(o.config), [x, f] = s.useState(c ? "success" : "loading"), [h, y] = s.useState(!1), N = s.useCallback(() => {
        y(!0)
    }, []);
    s.useEffect(() => {
        c || "loading" !== x || (0, p.Oq)(o.id, g.pY.CROSS_PLATFORM, l).then(() => f("success")).catch(() => f("error"))
    }, [o.id, c, x, l]);
    let L = !h || "loading" === x || null == d && null == u,
        R = "error" === x || null == m || null == d && null != u;
    return (0, a.jsx)(b.A, {
        onClose: n,
        transitionState: i,
        quest: o,
        sourceQuestContent: r,
        location: v.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: L,
        rewardContentHasError: R,
        rewardContent: R ? null : (0, a.jsx)(A.A, {
            rewardName: E.intl.string(E.t.Lmysvd),
            children: (0, a.jsx)(W, {
                onClose: n,
                orbsEarned: m,
                orbsBalance: d,
                isLoading: L,
                onVideoLoaded: N
            })
        })
    })
}