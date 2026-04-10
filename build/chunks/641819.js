/** chunk id: 641819 params = (module,exports,require) **/
n.d(t, {
    j: () => I
});
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(311907),
    o = n(732955),
    u = n(397927),
    d = n(447784),
    c = n(68545),
    p = n(412260),
    m = n(91053),
    E = n(287809),
    _ = n(937008),
    S = n(156312),
    x = n(166532),
    P = n(482132),
    T = n(970077),
    A = n(615310),
    h = n(985018),
    g = n(706360);

function I(e) {
    let {
        handleStepChange: t
    } = e, {
        selectedSkuId: n
    } = (0, S.P5)(), r = (0, T.A)(), I = (0, A.bB)(), {
        setSelectedGiftingPromotionReward: f,
        selectedGiftingPromotionReward: j,
        claimableRewards: R
    } = (0, _.Pv)(), M = (0, a.bG)([E.default], () => E.default.getCurrentUser()), C = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()), N = (0, c.U)(R, j), [O, y] = i.useState(N), [b, v] = i.useState(!1);
    i.useEffect(() => {
        b || null != j || null == N || (f(N), y(N))
    }, [N, b, j, f]), s()(null != r, "Expected plan to selected"), s()(null != n, "Expected selectedSkuId"), s()(null != I, "Step should be set");
    let k = i.useMemo(() => null != O && (R ?? []).includes(O), [O, R]),
        U = i.useMemo(() => 0 === C.length || null == O || !k, [C, O, k]);
    i.useEffect(() => {
        if (0 === C.length) {
            y(void 0), f(void 0);
            return
        }
        null != O && k && C.includes(O) || null == O || (y(void 0), f(void 0))
    }, [C, k, O, f]);
    let w = e => {
            f(e), y(e), v(!0)
        },
        G = C.map(e => (0, l.jsx)(d.k, {
            skuId: e,
            claimed: null != R && !R.includes(e),
            user: M,
            onSelect: w,
            selectedSkuId: O
        }, e)),
        D = (0, l.jsx)(P.UX, {
            children: (0, l.jsx)(m.Z, {
                onStepChange: t,
                onBackClick: () => t(x.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [r.id],
                selectedPlanId: r.id,
                isNextDisabled: U
            })
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.rQ0, {
            titleTextVariant: "heading-lg/semibold",
            title: h.intl.string(h.t.OEtqpm),
            subtitle: h.intl.string(h.t.h2nMp0)
        }), (0, l.jsx)(o.cwr, {
            children: (0, l.jsx)(u.BJc, {
                direction: "vertical",
                justify: "center",
                align: "center",
                children: (0, l.jsx)("div", {
                    className: g.Dq,
                    children: G
                })
            })
        }), D]
    })
}