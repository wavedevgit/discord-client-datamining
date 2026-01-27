/** Chunk was on 86142 **/
/** chunk id: 466133, original params: e,t,n (module,exports,require) **/
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
    d = n(854378),
    u = n(49463),
    h = n(369053),
    p = n(158237),
    g = n(210714),
    _ = n(961350),
    f = n(652215),
    m = n(985018),
    A = n(473169);
s.Ay.initialize();
let x = e => {
    let {
        location: t
    } = e, n = (0, s.bG)([_.default], () => _.default.isAuthenticated()), x = (0, s.bG)([u.A], () => u.A.hasLoadedExperiments), E = (0, p.Jp)("RSL - Landing Page"), [v, b] = i.useState(!1), [y, j] = i.useState(m.intl.string(m.t["9exy+V"])), [I, O] = i.useState(!0), S = e => {
        switch (e) {
            case f.t02.INVALID_FORM_BODY:
            case f.t02.DSA_RSL_REPORT_NOT_FOUND:
                j(m.intl.string(m.t.bzXDfc));
                break;
            case f.t02.DSA_RSL_ALREADY_REQUESTED:
                j(m.intl.string(m.t.rV00wq));
                break;
            case f.t02.DSA_RSL_LIMITED_TIME:
                j(m.intl.string(m.t["0dI29h"]));
                break;
            case f.t02.DSA_RSL_REPORT_INELIGIBLE:
                j(m.intl.string(m.t["RGa/Gb"]));
                break;
            default:
                j(m.intl.string(m.t["0QLzfv"]))
        }
    };
    return i.useEffect(() => {
        n ? (O(!0), o.rQ({
            withAnalyticsToken: !0
        }).then(() => O(!1)).catch(() => O(!1))) : O(!1)
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
                b(!1)
            }
        };
        b(!0), e((0, c.A)(t)), (0, g.d)("report_second_look")
    }, [t]), E && !I && (0, r.jsxs)(d.Ay, {
        children: [(0, r.jsx)(d.hE, {
            className: A.QB,
            children: y
        }), v && (0, r.jsx)(l.y$y, {})]
    })
}