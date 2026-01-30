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
    g = t(287809),
    E = t(954571),
    f = t(937008),
    j = t(156312),
    h = t(166532),
    x = t(482132),
    P = t(652215),
    T = t(985018),
    S = t(907);

function A(e) {
    let {
        handleStepChange: n,
        handleClose: t
    } = e, {
        selectedPlan: i,
        selectedSkuId: A,
        step: O
    } = (0, j.P5)(), {
        setSelectedGiftingPromotionReward: b,
        selectedGiftingPromotionReward: y,
        claimableRewards: I
    } = (0, f.Pv)(), _ = (0, a.bG)([g.default], () => g.default.getCurrentUser()), v = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), C = (0, d.UY)(I, y), [N, M] = r.useState(C), [R, k] = r.useState(!1);
    r.useEffect(() => {
        R || null != y || null == C || (b(C), M(C))
    }, [C, R, y, b]), s()(null != i, "Expected plan to selected"), s()(null != A, "Expected selectedSkuId"), s()(null != O, "Step should be set");
    let w = r.useMemo(() => null != N && (null != I ? I : []).includes(N), [N, I]),
        D = r.useMemo(() => 0 === v.length || null == N || !w, [v, N, w]);
    r.useEffect(() => {
        if (0 === v.length) {
            M(void 0), b(void 0);
            return
        }
        null != N && w && v.includes(N) || null == N || (M(void 0), b(void 0))
    }, [v, w, N, b]);
    let L = e => {
            b(e), M(e), k(!0)
        },
        G = v.map(e => (0, l.jsx)(u.k, {
            skuId: e,
            claimed: null != I && !I.includes(e),
            user: _,
            onSelect: L,
            selectedSkuId: N
        }, e)),
        U = (0, l.jsx)(x.UX, {
            children: (0, l.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: S.Hx,
                children: (0, l.jsx)(m.Z3, {
                    onStepChange: e => {
                        null != _ && null != y && E.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
                            user_id: _.id,
                            reward_sku_id: y
                        }), n(e)
                    },
                    onBackClick: () => n(h.pn.PLAN_SELECT),
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
            className: S.Hc,
            direction: c.A.Direction.VERTICAL,
            align: c.A.Align.START,
            separator: !1,
            children: [(0, l.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: T.intl.string(T.t.OEtqpm)
            }), (0, l.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: S.GQ,
                children: T.intl.string(T.t.h2nMp0)
            }), (0, l.jsx)(o.s_y, {
                "data-migration-pending": !0,
                className: S.b,
                onClick: t
            })]
        }), (0, l.jsx)(o.$mQ, {
            "data-migration-pending": !0,
            children: (0, l.jsx)(o.BJc, {
                direction: "vertical",
                justify: "center",
                align: "center",
                children: (0, l.jsx)("div", {
                    className: S.Dq,
                    children: G
                })
            })
        }), U]
    })
}