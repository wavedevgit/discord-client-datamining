/** Chunk was on 21738 **/
/** chunk id: 844358, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(835245),
    a = n(607399),
    s = n(732955),
    o = n(397927),
    c = n(642277),
    u = n(723702),
    d = n(652215),
    p = n(613057),
    h = n(985018),
    g = n(742249);

function f(e) {
    let {
        applicationId: t
    } = e, [f, m] = i.useState(null), [A, _] = i.useState(!1), b = i.useRef(!1), E = !u.isPlatformEmbedded && !a.Fr, O = i.useMemo(() => (0, l.A)(), []);
    if (i.useEffect(() => {
            E && !0 !== b.current ? (Promise.resolve().then(n.bind(n, 129014)).then(e => {
                let {
                    default: n
                } = e;
                n.request(d.e$_.DEEP_LINK, {
                    type: p.XK.ACTIVITIES,
                    params: {
                        applicationId: t,
                        url: location.href,
                        attemptId: O
                    }
                }).then(e => {
                    let t = null != e && e;
                    m(t), t || _(!0)
                }).catch(() => {
                    m(!1), _(!0)
                }).then(() => n.disconnect())
            }), b.current = !0) : E || _(!0)
        }, [t, E, O]), A) return (0, r.jsx)(c.A, {});
    if (E && !1 !== f)
        if (!0 === f) return (0, r.jsxs)("div", {
            className: g.k,
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-xxl/bold",
                children: h.intl.string(h.t.csrAMJ)
            }), (0, r.jsx)(o.Text, {
                variant: "text-xs/semibold",
                children: h.intl.string(h.t["m1+IBn"])
            }), (0, r.jsx)(s.$nd, {
                variant: "primary",
                text: h.intl.string(h.t.fIv16B),
                onClick: () => _(!0)
            })]
        });
        else return (0, r.jsxs)("div", {
            className: g.k,
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-xxl/bold",
                children: h.intl.string(h.t["Z+hCVU"])
            }), (0, r.jsx)(o.y$y, {})]
        });
    return (0, r.jsx)(c.A, {})
}