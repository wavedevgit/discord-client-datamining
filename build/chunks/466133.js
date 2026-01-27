/** Chunk was on 86142 **/
/** chunk id: 466133, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(830215),
    o = n(803306),
    c = n(396681),
    u = n(854378),
    d = n(49463),
    h = n(369053),
    p = n(158237),
    g = n(210714),
    f = n(961350),
    _ = n(652215),
    m = n(985018),
    A = n(473169);
s.Ay.initialize();
let x = e => {
    let {
        location: t
    } = e, n = (0, s.bG)([f.default], () => f.default.isAuthenticated()), x = (0, s.bG)([d.A], () => d.A.hasLoadedExperiments), E = (0, p.Jp)("RSL - Landing Page"), [v, y] = i.useState(!1), [b, j] = i.useState(m.intl.string(m.t["9exy+V"])), [O, I] = i.useState(!0), S = e => {
        switch (e) {
            case _.t02.INVALID_FORM_BODY:
            case _.t02.DSA_RSL_REPORT_NOT_FOUND:
                j(m.intl.string(m.t.bzXDfc));
                break;
            case _.t02.DSA_RSL_ALREADY_REQUESTED:
                j(m.intl.string(m.t.rV00wq));
                break;
            case _.t02.DSA_RSL_LIMITED_TIME:
                j(m.intl.string(m.t["0dI29h"]));
                break;
            case _.t02.DSA_RSL_REPORT_INELIGIBLE:
                j(m.intl.string(m.t["RGa/Gb"]));
                break;
            default:
                j(m.intl.string(m.t["0QLzfv"]))
        }
    };
    return i.useEffect(() => {
        n ? (I(!0), o.rQ({
            withAnalyticsToken: !0
        }).then(() => I(!1)).catch(() => I(!1))) : I(!1)
    }, [n]), i.useEffect(() => {
        x || E || a.A.getExperiments()
    }, [x, E]), i.useEffect(() => {
        let e = async e => {
            var t, n;
            try {
                let n = null != e ? await (0, h.q)(e) : void 0;
                null != n ? j(m.intl.string(m.t.e6mZMt)) : S(null == (t = n.body) ? void 0 : t.code)
            } catch (e) {
                S(null == (n = e.body) ? void 0 : n.code)
            } finally {
                y(!1)
            }
        };
        y(!0), e((0, c.A)(t)), (0, g.d)("report_second_look")
    }, [t]), E && !O && (0, r.jsxs)(u.Ay, {
        children: [(0, r.jsx)(u.hE, {
            className: A.QB,
            children: b
        }), v && (0, r.jsx)(l.y$y, {})]
    })
}