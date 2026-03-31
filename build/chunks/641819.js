/** chunk id: 641819 params = (module,exports,require) **/
t.d(n, {
    j: () => h
});
var l = t(627968),
    i = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(311907),
    o = t(732955),
    u = t(397927),
    d = t(447784),
    c = t(68545),
    p = t(412260),
    m = t(91053),
    E = t(287809),
    _ = t(937008),
    S = t(156312),
    x = t(166532),
    P = t(482132),
    T = t(985018),
    I = t(706360);

function h(e) {
    let {
        handleStepChange: n
    } = e, {
        selectedPlan: t,
        selectedSkuId: r,
        step: h
    } = (0, S.P5)(), {
        setSelectedGiftingPromotionReward: g,
        selectedGiftingPromotionReward: A,
        claimableRewards: f
    } = (0, _.Pv)(), j = (0, a.bG)([E.default], () => E.default.getCurrentUser()), R = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), C = (0, c.U)(f, A), [M, y] = i.useState(C), [N, O] = i.useState(!1);
    i.useEffect(() => {
        N || null != A || null == C || (g(C), y(C))
    }, [C, N, A, g]), s()(null != t, "Expected plan to selected"), s()(null != r, "Expected selectedSkuId"), s()(null != h, "Step should be set");
    let v = i.useMemo(() => null != M && (f ?? []).includes(M), [M, f]),
        b = i.useMemo(() => 0 === R.length || null == M || !v, [R, M, v]);
    i.useEffect(() => {
        if (0 === R.length) {
            y(void 0), g(void 0);
            return
        }
        null != M && v && R.includes(M) || null == M || (y(void 0), g(void 0))
    }, [R, v, M, g]);
    let k = e => {
            g(e), y(e), O(!0)
        },
        U = R.map(e => (0, l.jsx)(d.k, {
            skuId: e,
            claimed: null != f && !f.includes(e),
            user: j,
            onSelect: k,
            selectedSkuId: M
        }, e)),
        w = (0, l.jsx)(P.UX, {
            children: (0, l.jsx)(m.Z, {
                onStepChange: n,
                onBackClick: () => n(x.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [t.id],
                selectedPlanId: t.id,
                isNextDisabled: b
            })
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.rQ0, {
            titleTextVariant: "heading-lg/semibold",
            title: T.intl.string(T.t.OEtqpm),
            subtitle: T.intl.string(T.t.h2nMp0)
        }), (0, l.jsx)(o.cwr, {
            children: (0, l.jsx)(u.BJc, {
                direction: "vertical",
                justify: "center",
                align: "center",
                children: (0, l.jsx)("div", {
                    className: I.Dq,
                    children: U
                })
            })
        }), w]
    })
}