/** chunk id: 150574 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(575593),
    o = n(440703),
    d = n(311907),
    c = n(582754),
    u = n(397927),
    A = n(765671),
    h = n(736653),
    _ = n(291661),
    m = n(607470),
    g = n(287809),
    p = n(954571),
    E = n(341915),
    I = n(890687),
    f = n(579473),
    C = n(590202),
    T = n(734736),
    N = n(247455),
    S = n(57718),
    x = n(652215),
    v = n(985018),
    y = n(454622);
let b = (0, a.memo)(function(e) {
    let {
        quest: t
    } = e, [n, r] = (0, a.useState)(!1), [b, O] = (0, a.useState)(24), [L, R] = (0, a.useState)(!1), P = (0, a.useRef)(null), D = (0, a.useRef)(null), M = (0, a.useRef)(null), j = (0, d.bG)([g.default], () => g.default.getCurrentUser()), {
        ref: w,
        height: U = 0
    } = (0, A.Ay)(), G = (0, h.Ay)(), k = (0, I.S5)(t.userStatus?.claimedAt, {
        month: "numeric",
        day: "numeric"
    }), V = t.userStatus?.claimedTier ?? 0, B = t.config.rewards[V], H = B?.type === o.l.FRACTIONAL_PREMIUM, F = B?.type === o.l.COLLECTIBLE, Y = B?.type === o.l.VIRTUAL_CURRENCY, W = B?.collectibleProduct?.items?.[0], K = W?.type === s.R.AVATAR_DECORATION ? W : null;
    (0, A.i4)(P, e => {
        let {
            height: t
        } = e;
        if (!F || null == t || null == D.current || null == P.current || null == M.current) return;
        let n = P.current.getBoundingClientRect(),
            i = D.current.getBoundingClientRect(),
            a = M.current.getBoundingClientRect();
        O((i.top - n.top - a.height) / 2)
    });
    let q = (0, c.Mw)(G),
        z = (0, a.useMemo)(() => null != t.config.cosponsorMetadata, [t]),
        $ = (0, a.useMemo)(() => (0, f.tW)(t, f.fY.REWARD), [t]),
        Q = n ? U + 8 : 0,
        {
            content_position: X,
            row_index: Z,
            ...J
        } = (0, C.fF)(E.uF.TROPHY_CASE_CARD),
        ee = () => {
            r(!0), p.default.track(x.HAw.QUEST_HOVER, {
                quest_id: t.id,
                ...J
            })
        },
        et = () => {
            r(!1)
        },
        en = e => {
            R(!0), p.default.track(x.HAw.QUEST_ASSET_LOADING_FAILURE, {
                source: e,
                asset_id: e,
                quest_id: t.id
            })
        };
    return null == B || L ? null : (0, i.jsx)(u.vN3, {
        children: (0, i.jsxs)("div", {
            ref: P,
            tabIndex: 0,
            onFocus: ee,
            onBlur: et,
            onMouseEnter: ee,
            onMouseLeave: et,
            className: l()(y.kL, {
                [y.yo]: n
            }),
            children: [null != j && F && null != K && (0, i.jsx)("div", {
                ref: M,
                className: y.FX,
                style: {
                    top: b
                },
                children: (0, i.jsx)(_.A, {
                    avatarDecorationOverride: K,
                    user: j,
                    guildId: null,
                    animateOnHover: !n
                })
            }), H ? (0, i.jsx)(T.A, {
                className: y.Sl
            }) : Y ? (0, i.jsx)(N.A, {
                className: y.Sl,
                isAnimated: n,
                questName: t.config.messages.questName
            }) : $.isAnimated ? (0, i.jsx)(m.A, {
                className: y.JU,
                autoPlay: !1,
                children: (0, i.jsx)("source", {
                    src: $.url,
                    type: $.mimetype ?? void 0,
                    onError: () => en($.url)
                })
            }) : (0, i.jsx)("img", {
                className: y.Sl,
                src: $.url,
                alt: t.config.messages.questName,
                onError: () => en($.url)
            }), (0, i.jsx)("div", {
                className: l()(y.Lw, {
                    [y.en]: q,
                    [y.So]: !q
                })
            }), (0, i.jsx)("div", {
                ref: D,
                className: y.r$,
                style: {
                    transform: `translateY(-${Q}px)`
                },
                children: (0, i.jsx)(S.Ay, {
                    logotypeClassName: l()(y.wm, {
                        [y.A0]: z
                    }),
                    quest: t,
                    withGameTile: !1
                })
            }), (0, i.jsxs)("div", {
                ref: w,
                className: y.zH,
                children: [(0, i.jsx)(u.Heading, {
                    className: y.DD,
                    variant: "heading-md/semibold",
                    color: "always-white",
                    children: v.intl.format(v.t.EAYZAr, {
                        questName: t.config.messages.questName
                    })
                }), (0, i.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: q ? "text-muted" : "always-white",
                    style: {
                        opacity: q ? 1 : .75
                    },
                    children: v.intl.format(v.t["kXVcV+"], {
                        reward: B.name,
                        claimedDate: k
                    })
                })]
            })]
        })
    })
})