/** chunk id: 157839 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(531260),
    c = n(287809),
    u = n(637073),
    m = n(398523),
    _ = n(612669),
    g = n(180022),
    A = n(513570),
    x = n(975662),
    p = n(322631),
    h = n(17307),
    f = n(609195);
let T = e => {
        let {
            showAllPerksButton: t,
            leftAlignHeaders: n,
            title: s,
            headerClassname: l
        } = e, a = (0, i.jsx)(o.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: null != l ? l : f.R_,
            children: s
        });
        return null == t ? a : n ? (0, i.jsxs)("div", {
            className: f.bV,
            children: [a, null != t && (0, i.jsx)("div", {
                className: f.W0,
                children: t
            })]
        }) : (0, i.jsx)("div", {
            className: f.kL,
            children: (0, i.jsx)("div", {
                className: f.pr,
                children: a
            })
        })
    },
    E = e => {
        let {
            className: t,
            variant: n,
            noBackground: l = !1,
            leftAlignHeaders: E = !1,
            showAllPerksButton: S,
            headerClassname: b
        } = e, C = s.useRef(null), N = n === p.cJ.WHATS_NEW, v = (0, r.bG)([c.default], () => c.default.getCurrentUser()), I = (0, A.E)();
        s.useEffect(() => {
            N && I()
        }, [I, N]);
        let j = (0, h.G4)(N),
            y = (0, x.A)(),
            O = (0, h.LQ)(),
            {
                fractionalState: R
            } = (0, d.A)(),
            L = (0, u.d)(),
            P = m.A.useExperiment({
                location: "PremiumPerks"
            }).enabled,
            D = (0, _.O9)(),
            G = (0, h.vx)({
                perksCards: y,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: O,
                fractionalState: R,
                isInReverseTrial: L,
                recurring3PPromotionExperiment: P,
                showPremiumGroup: D,
                isPremiumGroupMember: v?.isPremiumGroupMember()
            }),
            M = G.some(e => null != e.pillText);
        return (0, i.jsxs)("div", {
            ref: C,
            className: a()(f.uW, {
                [f.qO]: !E,
                [f.Uv]: E
            }, t),
            children: [(0, i.jsx)(T, {
                showAllPerksButton: S,
                leftAlignHeaders: E,
                title: j.title,
                headerClassname: b
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/normal",
                color: "text-strong",
                className: a()(f.VA, {
                    [f.VA]: null == S || E,
                    [f.Xx]: null != S && !E,
                    [f.Ij]: N || E,
                    [f.Ob]: M,
                    [f.dO]: E,
                    [f.br]: !E
                }),
                children: j.subtitle
            }), !E && null != S && (0, i.jsx)("div", {
                className: f.xk,
                children: S
            }), (0, i.jsx)("div", {
                className: f.Ui,
                children: G.map((e, t) => (0, i.jsx)(g.A, {
                    ...e,
                    forceShadow: l
                }, `${e.name}_${t}`))
            })]
        })
    }