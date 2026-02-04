/** chunk id: 389405, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(835245),
    a = n(607399),
    s = n(732955),
    o = n(397927),
    c = n(954571),
    u = n(723702),
    d = n(394727),
    p = n(652215),
    h = n(613057),
    f = n(985018),
    g = n(742249);

function m(e) {
    let {
        applicationId: t
    } = e.match.params, [m, A] = i.useState(!1), _ = i.useRef(!1), [b, E] = i.useState(null), O = !u.isPlatformEmbedded && !a.Fr && !m, y = i.useMemo(() => (0, l.A)(), []);
    return (i.useEffect(() => {
        O && !0 !== _.current && (Promise.resolve().then(n.bind(n, 129014)).then(e => {
            let {
                default: n
            } = e;
            n.request(p.e$_.DEEP_LINK, {
                type: h.XK.ACTIVITIES,
                params: {
                    applicationId: t,
                    url: location.href,
                    attemptId: y
                }
            }).then(e => {
                let n = null != e && e;
                E(n), c.default.track(p.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                    application_id: t,
                    source_url: location.href,
                    attempt_id: y,
                    rpc_success: n
                })
            }).catch(() => {
                E(!1), c.default.track(p.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                    application_id: t,
                    source_url: location.href,
                    attempt_id: y,
                    rpc_success: !1
                })
            }).then(() => n.disconnect())
        }), _.current = !0)
    }, [t, O, y]), O && !1 !== b) ? !0 === b ? (0, r.jsxs)("div", {
        className: g.k,
        children: [(0, r.jsx)(o.Heading, {
            variant: "heading-xxl/bold",
            children: f.intl.string(f.t.csrAMJ)
        }), (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            children: f.intl.string(f.t["m1+IBn"])
        }), (0, r.jsx)(s.$nd, {
            variant: "primary",
            text: f.intl.string(f.t.fIv16B),
            onClick: () => A(!0)
        })]
    }) : (0, r.jsxs)("div", {
        className: g.k,
        children: [(0, r.jsx)(o.Heading, {
            variant: "heading-xxl/bold",
            children: f.intl.string(f.t["Z+hCVU"])
        }), (0, r.jsx)(o.y$y, {})]
    }) : (0, r.jsx)(d.A, function(e) {
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
    }({}, e))
}