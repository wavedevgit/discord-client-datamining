/** Chunk was on 5606 **/
/** chunk id: 326736, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(531260),
    d = n(287809),
    u = n(637073),
    p = n(398523),
    _ = n(612669),
    m = n(513570),
    g = n(975662),
    f = n(322631),
    b = n(17307),
    h = n(180022),
    A = n(128906);
let E = e => {
        let {
            showAllPerksButton: t,
            leftAlignHeaders: n,
            title: i,
            headerClassname: l
        } = e, s = (0, r.jsx)(o.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: null != l ? l : A.R_,
            children: i
        });
        return null == t ? s : n ? (0, r.jsxs)("div", {
            className: A.bV,
            children: [s, null != t && (0, r.jsx)("div", {
                className: A.W0,
                children: t
            })]
        }) : (0, r.jsx)("div", {
            className: A.kL,
            children: (0, r.jsx)("div", {
                className: A.pr,
                children: s
            })
        })
    },
    x = e => {
        let {
            className: t,
            variant: n,
            noBackground: l = !1,
            leftAlignHeaders: x = !1,
            showAllPerksButton: O,
            headerClassname: C
        } = e, y = i.useRef(null), j = n === f.cJ.WHATS_NEW, T = (0, a.bG)([d.default], () => d.default.getCurrentUser()), v = (0, m.E)();
        i.useEffect(() => {
            j && v()
        }, [v, j]);
        let S = (0, b.G4)(j),
            I = (0, g.A)(),
            N = (0, b.LQ)(),
            {
                fractionalState: P
            } = (0, c.A)(),
            R = (0, u.d)(),
            D = p.A.useExperiment({
                location: "PremiumPerks"
            }).enabled,
            w = (0, _.O9)(),
            L = (0, b.vx)({
                perksCards: I,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: N,
                fractionalState: P,
                isInReverseTrial: R,
                recurring3PPromotionExperiment: D,
                showPremiumGroup: w,
                isPremiumGroupMember: null == T ? void 0 : T.isPremiumGroupMember()
            }),
            M = L.some(e => null != e.pillText);
        return (0, r.jsxs)("div", {
            ref: y,
            className: s()(A.uW, {
                [A.qO]: !x,
                [A.Uv]: x
            }, t),
            children: [(0, r.jsx)(E, {
                showAllPerksButton: O,
                leftAlignHeaders: x,
                title: S.title,
                headerClassname: C
            }), (0, r.jsx)(o.Text, {
                variant: "text-lg/normal",
                color: "text-strong",
                className: s()(A.VA, {
                    [A.VA]: null == O || x,
                    [A.Xx]: null != O && !x,
                    [A.Ij]: j || x,
                    [A.Ob]: M,
                    [A.dO]: x,
                    [A.br]: !x
                }),
                children: S.subtitle
            }), !x && null != O && (0, r.jsx)("div", {
                className: A.xk,
                children: O
            }), (0, r.jsx)("div", {
                className: A.Ui,
                children: L.map((e, t) => {
                    var n, i;
                    return (0, r.jsx)(h.A, (n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, e), i = i = {
                        forceShadow: l
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                    }), n), "".concat(e.name, "_").concat(t))
                })
            })]
        })
    }