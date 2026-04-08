/** chunk id: 466133 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(397927),
    a = n(830215),
    o = n(803306),
    c = n(396681),
    d = n(854378),
    u = n(49463),
    h = n(369053),
    _ = n(158237),
    p = n(210714),
    g = n(961350),
    m = n(652215),
    A = n(985018),
    f = n(153335);
r.Ay.initialize();
let E = e => {
    let {
        location: t
    } = e, n = (0, r.bG)([g.default], () => g.default.isAuthenticated()), E = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments), x = (0, _.Jp)("RSL - Landing Page"), [I, N] = s.useState(!1), [v, T] = s.useState(A.intl.string(A.t["9exy+V"])), [C, j] = s.useState(!0), S = e => {
        switch (e) {
            case m.t02.INVALID_FORM_BODY:
            case m.t02.DSA_RSL_REPORT_NOT_FOUND:
                T(A.intl.string(A.t.bzXDfc));
                break;
            case m.t02.DSA_RSL_ALREADY_REQUESTED:
                T(A.intl.string(A.t.rV00wq));
                break;
            case m.t02.DSA_RSL_LIMITED_TIME:
                T(A.intl.string(A.t["0dI29h"]));
                break;
            case m.t02.DSA_RSL_REPORT_INELIGIBLE:
                T(A.intl.string(A.t["RGa/Gb"]));
                break;
            default:
                T(A.intl.string(A.t["0QLzfv"]))
        }
    };
    return s.useEffect(() => {
        n ? (j(!0), o.rQ({
            withAnalyticsToken: !0
        }).then(() => j(!1)).catch(() => j(!1))) : j(!1)
    }, [n]), s.useEffect(() => {
        E || x || a.A.getExperiments()
    }, [E, x]), s.useEffect(() => {
        let e = async e => {
            try {
                let t = null != e ? await (0, h.q)(e) : void 0;
                null != t ? T(A.intl.string(A.t.e6mZMt)) : S(t.body?.code)
            } catch (e) {
                S(e.body?.code)
            } finally {
                N(!1)
            }
        };
        N(!0), e((0, c.A)(t)), (0, p.d)("report_second_look")
    }, [t]), x && !C && (0, i.jsxs)(d.Ay, {
        children: [(0, i.jsx)(d.hE, {
            className: f.QB,
            children: v
        }), I && (0, i.jsx)(l.y$y, {})]
    })
}