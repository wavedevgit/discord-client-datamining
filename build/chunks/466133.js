/** chunk id: 466133, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(397927),
    a = n(830215),
    o = n(803306),
    d = n(396681),
    c = n(854378),
    u = n(49463),
    h = n(369053),
    _ = n(158237),
    p = n(210714),
    g = n(961350),
    m = n(652215),
    f = n(985018),
    A = n(522759);
r.Ay.initialize();
let x = e => {
    let {
        location: t
    } = e, n = (0, r.bG)([g.default], () => g.default.isAuthenticated()), x = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments), E = (0, _.Jp)("RSL - Landing Page"), [I, v] = s.useState(!1), [N, j] = s.useState(f.intl.string(f.t["9exy+V"])), [S, C] = s.useState(!0), T = e => {
        switch (e) {
            case m.t02.INVALID_FORM_BODY:
            case m.t02.DSA_RSL_REPORT_NOT_FOUND:
                j(f.intl.string(f.t.bzXDfc));
                break;
            case m.t02.DSA_RSL_ALREADY_REQUESTED:
                j(f.intl.string(f.t.rV00wq));
                break;
            case m.t02.DSA_RSL_LIMITED_TIME:
                j(f.intl.string(f.t["0dI29h"]));
                break;
            case m.t02.DSA_RSL_REPORT_INELIGIBLE:
                j(f.intl.string(f.t["RGa/Gb"]));
                break;
            default:
                j(f.intl.string(f.t["0QLzfv"]))
        }
    };
    return s.useEffect(() => {
        n ? (C(!0), o.rQ({
            withAnalyticsToken: !0
        }).then(() => C(!1)).catch(() => C(!1))) : C(!1)
    }, [n]), s.useEffect(() => {
        x || E || a.A.getExperiments()
    }, [x, E]), s.useEffect(() => {
        let e = async e => {
            try {
                let t = null != e ? await (0, h.q)(e) : void 0;
                null != t ? j(f.intl.string(f.t.e6mZMt)) : T(t.body?.code)
            } catch (e) {
                T(e.body?.code)
            } finally {
                v(!1)
            }
        };
        v(!0), e((0, d.A)(t)), (0, p.d)("report_second_look")
    }, [t]), E && !S && (0, i.jsxs)(c.Ay, {
        children: [(0, i.jsx)(c.hE, {
            className: A.QB,
            children: N
        }), I && (0, i.jsx)(l.y$y, {})]
    })
}