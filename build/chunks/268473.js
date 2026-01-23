/** Chunk was on 67426 **/
/** chunk id: 268473, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => W
}), n(896048);
var a = n(627968),
    s = n(64700),
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
    b = n(341915),
    j = n(890687),
    g = n(92246),
    y = n(109174),
    C = n(524728),
    v = n(654487),
    A = n(652215),
    N = n(758836),
    S = n(985018),
    O = n(176741),
    E = n(627898),
    L = n(341744),
    w = n(484252),
    R = n(460290),
    T = n(181713);

function D(e) {
    let {
        onVideoLoaded: t
    } = e;
    return (0, a.jsx)(x.A, {
        className: O.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, a.jsx)("source", {
            src: T.A,
            type: "video/webm"
        })
    })
}

function P(e) {
    let {
        onVideoLoaded: t,
        isLoading: n
    } = e, r = (0, l.bG)([d.A], () => d.A.useReducedMotion), [u, m] = s.useState(!r), f = (0, c.Ay)(), h = (0, o.qB1)(f), _ = h ? L.A : E.A, p = h ? R.A : w.A, b = s.useRef(null), j = s.useRef(null), [g, y] = s.useState(!1), [C, v] = s.useState(!1), [A, N] = s.useState(!1);
    s.useEffect(() => {
        g && C && A && t()
    }, [g, C, A, t]), s.useEffect(() => {
        n || r || setTimeout(() => {
            var e;
            null == (e = b.current) || e.play()
        }, 200)
    }, [n, r]);
    let S = s.useCallback(() => {
        if (!r) {
            var e;
            m(!1), null == (e = j.current) || e.play()
        }
    }, [r]);
    return (0, a.jsxs)("div", {
        className: O.GF,
        children: [(0, a.jsx)(x.A, {
            ref: j,
            autoPlay: !1,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: i()(O.nH, O.EZ, {
                [O.R]: u
            }),
            controls: !1,
            onCanPlayThrough: s.useCallback(() => v(!0), []),
            children: (0, a.jsx)("source", {
                src: p,
                type: "video/webm"
            })
        }), (0, a.jsx)(x.A, {
            ref: b,
            autoPlay: !1,
            muted: !0,
            playsInline: !0,
            className: O.nH,
            controls: !1,
            onCanPlayThrough: s.useCallback(() => y(!0), []),
            onEnded: S,
            children: (0, a.jsx)("source", {
                src: _,
                type: "video/webm"
            })
        }), (0, a.jsxs)("div", {
            className: O.Se,
            children: [(0, a.jsx)(D, {
                onVideoLoaded: s.useCallback(() => N(!0), [])
            }), (0, a.jsx)(D, {}), (0, a.jsx)(D, {}), (0, a.jsx)(D, {})]
        })]
    })
}

function k(e) {
    let {
        isLoading: t,
        onClose: n,
        orbsEarned: s,
        orbsBalance: r,
        onVideoLoaded: i
    } = e, l = async () => {
        (0, f.Y)({
            pageType: A.liQ.GLOBAL_DISCOVERY_QUESTS,
            sectionType: A.JJy.ORBS_REWARD_MODAL,
            ctaObject: A.ZSU.CTA_TO_ORBS_SHOP
        }), await n(), (0, m.Cz)({
            tab: N.G2.ORBS,
            analyticsLocations: [],
            analyticsSource: u.A.QUEST_REWARD_MODAL
        })
    };
    return (0, a.jsxs)("div", {
        className: O.hQ,
        children: [(0, a.jsx)(P, {
            isLoading: t,
            onVideoLoaded: i
        }), (0, a.jsxs)("div", {
            className: O.dD,
            children: [(0, a.jsxs)("div", {
                className: O.R_,
                children: [(0, a.jsx)(_.B, {
                    shouldUseThemeColor: !0,
                    className: O.Uu
                }), (0, a.jsx)(o.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: S.intl.formatToPlainString(S.t.YMor7k, {
                        count: s
                    })
                })]
            }), null != r ? (0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: S.intl.format(S.t.g4t9aw, {
                    orbsBalance: r,
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
            text: S.intl.string(S.t.WYchde),
            onClick: l,
            fullWidth: !0
        })]
    })
}

function W(e) {
    var t, n;
    let {
        initialQuest: r,
        onClose: i,
        transitionState: l,
        sourceQuestContent: o,
        location: c
    } = e, d = null != (t = (0, j.C5)(r.id)) ? t : r, u = (null == (n = d.userStatus) ? void 0 : n.claimedAt) != null, {
        balance: m,
        error: x
    } = (0, h.W)(), f = (0, g._Z)(d.config), [_, A] = s.useState(u ? "success" : "loading"), [N, O] = s.useState(!1), E = s.useCallback(() => {
        O(!0)
    }, []);
    s.useEffect(() => {
        u || "loading" !== _ || (0, p.Oq)(d.id, b.pY.CROSS_PLATFORM, c).then(() => A("success")).catch(() => A("error"))
    }, [d.id, u, _, c]);
    let L = !N || "loading" === _ || null == m && null == x,
        w = "error" === _ || null == f || null == m && null != x;
    return (0, a.jsx)(C.A, {
        onClose: i,
        transitionState: l,
        quest: d,
        sourceQuestContent: o,
        location: v.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: L,
        rewardContentHasError: w,
        rewardContent: w ? null : (0, a.jsx)(y.A, {
            rewardName: S.intl.string(S.t.Lmysvd),
            children: (0, a.jsx)(k, {
                onClose: i,
                orbsEarned: f,
                orbsBalance: m,
                isLoading: L,
                onVideoLoaded: E
            })
        })
    })
}