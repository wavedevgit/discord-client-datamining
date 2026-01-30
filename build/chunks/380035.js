/** chunk id: 380035, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(397927),
    c = n(287809),
    o = n(975571),
    u = n(735321),
    d = n(463259),
    b = n(384377),
    f = n(518477),
    p = n(985018),
    g = n(22047);

function x(t) {
    let {
        widget: e,
        user: n
    } = t;
    return (0, r.jsx)(d.u, {
        widget: e,
        user: n,
        disableInteraction: !0
    })
}

function h(t) {
    let {
        transitionState: e,
        widget: n,
        userId: d,
        onClose: h,
        trackUserProfileEditAction: j
    } = t, m = i.useCallback(() => {
        (0, u.qA)(n), j(function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), r.forEach(function(e) {
                    var r;
                    r = n[e], e in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r
                })
            }
            return t
        }({
            action: "WIDGET_REMOVED"
        }, n.getProfileEditAnalyticsOptions())), h(), (0, b.XA)(f.jM.WIDGET_REMOVED)
    }, [n, h, j]), w = (0, a.bG)([c.default], () => c.default.getUser(d));
    return null == w ? null : (0, r.jsxs)(l.Modal, {
        transitionState: e,
        onClose: h,
        title: p.intl.string(p.t.Mm07Yc),
        subtitle: p.intl.format(p.t["x+djI4"], {
            helpUrl: o.C
        }),
        actions: [{
            variant: "secondary",
            text: p.intl.string(p.t["ETE/oC"]),
            onClick: h
        }, {
            variant: "critical-primary",
            text: p.intl.string(p.t.Mm07Yc),
            onClick: m
        }],
        children: [(0, r.jsx)("div", {
            className: g.w,
            children: (0, r.jsx)(x, {
                widget: n,
                user: w
            })
        }), (0, r.jsx)("div", {
            className: g.d,
            children: (0, r.jsx)(s.Text, {
                color: "text-subtle",
                variant: "text-sm/normal",
                children: p.intl.string(p.t.bQNGeT)
            })
        })]
    })
}