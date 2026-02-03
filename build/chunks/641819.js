/** chunk id: 641819, original params: e,n,t (module,exports,require) **/
t.d(n, {
    j: () => A
}), t(896048);
var l = t(627968),
    r = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(311907),
    o = t(397927),
    u = t(447784),
    c = t(235986),
    d = t(68545),
    p = t(412260),
    m = t(446929),
    E = t(287809),
    g = t(954571),
    f = t(937008),
    P = t(156312),
    j = t(166532),
    h = t(482132),
    _ = t(652215),
    x = t(985018),
    T = t(907);

function A(e) {
    let {
        handleStepChange: n,
        handleClose: t
    } = e, {
        selectedPlan: i,
        selectedSkuId: A,
        step: O
    } = (0, P.P5)(), {
        setSelectedGiftingPromotionReward: S,
        selectedGiftingPromotionReward: I,
        claimableRewards: b
    } = (0, f.Pv)(), y = (0, a.bG)([E.default], () => E.default.getCurrentUser()), v = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), R = (0, d.UY)(b, I), [C, M] = r.useState(R), [N, k] = r.useState(!1);
    r.useEffect(() => {
        N || null != I || null == R || (S(R), M(R))
    }, [R, N, I, S]), s()(null != i, "Expected plan to selected"), s()(null != A, "Expected selectedSkuId"), s()(null != O, "Step should be set");
    let w = r.useMemo(() => null != C && (null != b ? b : []).includes(C), [C, b]),
        D = r.useMemo(() => 0 === v.length || null == C || !w, [v, C, w]);
    r.useEffect(() => {
        if (0 === v.length) {
            M(void 0), S(void 0);
            return
        }
        null != C && w && v.includes(C) || null == C || (M(void 0), S(void 0))
    }, [v, w, C, S]);
    let U = e => {
            S(e), M(e), k(!0)
        },
        L = v.map(e => (0, l.jsx)(u.k, {
            skuId: e,
            claimed: null != b && !b.includes(e),
            user: y,
            onSelect: U,
            selectedSkuId: C
        }, e)),
        G = (0, l.jsx)(h.UX, {
            children: (0, l.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: T.Hx,
                children: (0, l.jsx)(m.Z3, {
                    onStepChange: e => {
                        null != y && null != I && g.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
                            user_id: y.id,
                            reward_sku_id: I
                        }), n(e)
                    },
                    onBackClick: () => n(j.pn.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [i.id],
                    selectedPlanId: i.id,
                    isNextDisabled: D
                })
            })
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(o.rQ0, {
            "data-migration-pending": !0,
            className: T.Hc,
            direction: c.A.Direction.VERTICAL,
            align: c.A.Align.START,
            separator: !1,
            children: [(0, l.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: x.intl.string(x.t.OEtqpm)
            }), (0, l.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: T.GQ,
                children: x.intl.string(x.t.h2nMp0)
            }), (0, l.jsx)(o.s_y, {
                "data-migration-pending": !0,
                className: T.b,
                onClick: t
            })]
        }), (0, l.jsx)(o.$mQ, {
            "data-migration-pending": !0,
            children: (0, l.jsx)(o.BJc, {
                direction: "vertical",
                justify: "center",
                align: "center",
                children: (0, l.jsx)("div", {
                    className: T.Dq,
                    children: L
                })
            })
        }), G]
    })
}