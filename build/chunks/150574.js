/** chunk id: 150574, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(575593),
    o = n(440703),
    d = n(311907),
    c = n(582754),
    u = n(397927),
    A = n(765671),
    h = n(736653),
    _ = n(291661),
    m = n(607470),
    p = n(287809),
    g = n(954571),
    E = n(341915),
    I = n(890687),
    f = n(579473),
    C = n(590202),
    T = n(734736),
    N = n(247455),
    S = n(57718),
    x = n(652215),
    v = n(985018),
    y = n(834600);
let b = (0, r.memo)(function(e) {
    let {
        quest: t
    } = e, [n, l] = (0, r.useState)(!1), [b, O] = (0, r.useState)(24), [L, R] = (0, r.useState)(!1), P = (0, r.useRef)(null), j = (0, r.useRef)(null), D = (0, r.useRef)(null), M = (0, d.bG)([p.default], () => p.default.getCurrentUser()), {
        ref: w,
        height: U = 0
    } = (0, A.Ay)(), G = (0, h.Ay)(), k = (0, I.S5)(t.userStatus?.claimedAt, {
        month: "numeric",
        day: "numeric"
    }), V = t.userStatus?.claimedTier ?? 0, B = t.config.rewards[V], H = B?.type === o.l.FRACTIONAL_PREMIUM, F = B?.type === o.l.COLLECTIBLE, Y = B?.type === o.l.VIRTUAL_CURRENCY, q = B?.collectibleProduct?.items?.[0], W = q?.type === s.R.AVATAR_DECORATION ? q : null;
    (0, A.i4)(P, e => {
        let {
            height: t
        } = e;
        if (!F || null == t || null == j.current || null == P.current || null == D.current) return;
        let n = P.current.getBoundingClientRect(),
            i = j.current.getBoundingClientRect(),
            r = D.current.getBoundingClientRect();
        O((i.top - n.top - r.height) / 2)
    });
    let K = (0, c.Mw)(G),
        z = (0, r.useMemo)(() => null != t.config.cosponsorMetadata, [t]),
        $ = (0, r.useMemo)(() => (0, f.tW)(t, f.fY.REWARD), [t]),
        Q = n ? U + 8 : 0,
        {
            content_position: X,
            row_index: Z,
            ...J
        } = (0, C.fF)(E.uF.TROPHY_CASE_CARD),
        ee = () => {
            l(!0), g.default.track(x.HAw.QUEST_HOVER, {
                quest_id: t.id,
                ...J
            })
        },
        et = () => {
            l(!1)
        },
        en = e => {
            R(!0), g.default.track(x.HAw.QUEST_ASSET_LOADING_FAILURE, {
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
            className: a()(y.kL, {
                [y.yo]: n
            }),
            children: [null != M && F && null != W && (0, i.jsx)("div", {
                ref: D,
                className: y.FX,
                style: {
                    top: b
                },
                children: (0, i.jsx)(_.A, {
                    avatarDecorationOverride: W,
                    user: M,
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
                className: a()(y.Lw, {
                    [y.en]: K,
                    [y.So]: !K
                })
            }), (0, i.jsx)("div", {
                ref: j,
                className: y.r$,
                style: {
                    transform: `translateY(-${Q}px)`
                },
                children: (0, i.jsx)(S.Ay, {
                    logotypeClassName: a()(y.wm, {
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
                    color: K ? "text-muted" : "always-white",
                    style: {
                        opacity: K ? 1 : .75
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