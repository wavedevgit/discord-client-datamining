/** chunk id: 157839 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(531260),
    c = n(287809),
    u = n(637073),
    _ = n(398523),
    m = n(612669),
    g = n(180022),
    A = n(513570),
    h = n(975662),
    x = n(322631),
    p = n(17307),
    T = n(204593);
let E = e => {
        let {
            showAllPerksButton: t,
            leftAlignHeaders: n,
            title: s,
            headerClassname: l
        } = e, r = (0, i.jsx)(o.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: null != l ? l : T.R_,
            children: s
        });
        return null == t ? r : n ? (0, i.jsxs)("div", {
            className: T.bV,
            children: [r, null != t && (0, i.jsx)("div", {
                className: T.W0,
                children: t
            })]
        }) : (0, i.jsx)("div", {
            className: T.kL,
            children: (0, i.jsx)("div", {
                className: T.pr,
                children: r
            })
        })
    },
    C = e => {
        let {
            className: t,
            variant: n,
            noBackground: l = !1,
            leftAlignHeaders: C = !1,
            showAllPerksButton: S,
            headerClassname: f
        } = e, N = s.useRef(null), b = n === x.cJ.WHATS_NEW, I = (0, a.bG)([c.default], () => c.default.getCurrentUser()), v = (0, A.E)();
        s.useEffect(() => {
            b && v()
        }, [v, b]);
        let j = (0, p.G4)(b),
            O = (0, h.A)(),
            y = (0, p.LQ)(),
            {
                fractionalState: R
            } = (0, d.A)(),
            P = (0, u.d)(),
            D = _.A.useExperiment({
                location: "PremiumPerks"
            }).enabled,
            L = (0, m.O9)(),
            M = (0, p.vx)({
                perksCards: O,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: y,
                fractionalState: R,
                isInReverseTrial: P,
                recurring3PPromotionExperiment: D,
                showPremiumGroup: L,
                isPremiumGroupMember: I?.isPremiumGroupMember()
            }),
            G = M.some(e => null != e.pillText);
        return (0, i.jsxs)("div", {
            ref: N,
            className: r()(T.uW, {
                [T.qO]: !C,
                [T.Uv]: C
            }, t),
            children: [(0, i.jsx)(E, {
                showAllPerksButton: S,
                leftAlignHeaders: C,
                title: j.title,
                headerClassname: f
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/normal",
                color: "text-strong",
                className: r()(T.VA, {
                    [T.VA]: null == S || C,
                    [T.Xx]: null != S && !C,
                    [T.Ij]: b || C,
                    [T.Ob]: G,
                    [T.dO]: C,
                    [T.br]: !C
                }),
                children: j.subtitle
            }), !C && null != S && (0, i.jsx)("div", {
                className: T.xk,
                children: S
            }), (0, i.jsx)("div", {
                className: T.Ui,
                children: M.map((e, t) => (0, i.jsx)(g.A, {
                    ...e,
                    forceShadow: l
                }, `${e.name}_${t}`))
            })]
        })
    }