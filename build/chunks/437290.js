/** chunk id: 437290, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(990078),
    c = r(397927),
    o = r(854627),
    d = r(429974);

function u(e) {
    var t;
    let {
        user: r,
        checked: s,
        onChange: u,
        disabled: b,
        tooltipConfig: x
    } = e, m = a.useRef(null), {
        avatarSrc: h,
        eventHandlers: _
    } = (0, o.A)({
        userId: null == r ? void 0 : r.id,
        size: c._3J.SIZE_32
    }), f = null != (t = r.globalName) ? t : r.username;
    return (0, n.jsx)(i.m, {
        text: (null == x ? void 0 : x.isActive(r, b)) ? x.text(r) : null,
        position: "top",
        anchorRef: m,
        asContainer: !0,
        children: (0, n.jsxs)("div", {
            className: d.kL,
            children: [(0, n.jsx)("div", {
                className: d.dj,
                children: (0, n.jsx)(c.euF, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({
                    className: l()({
                        [d.SU]: b
                    }),
                    src: h,
                    "aria-label": f,
                    size: c._3J.SIZE_32
                }, _))
            }), (0, n.jsxs)("div", {
                className: d.QV,
                children: [(0, n.jsx)(c.Text, {
                    className: d.nT,
                    color: b ? "text-muted" : "text-default",
                    variant: "text-md/semibold",
                    children: f
                }), (0, n.jsx)(c.Text, {
                    className: d.nT,
                    color: b ? "text-muted" : "text-subtle",
                    variant: "text-xs/normal",
                    children: r.username
                })]
            }), (0, n.jsx)("div", {
                ref: m,
                className: d.kv,
                children: (0, n.jsx)(c.Checkbox, {
                    disabled: b,
                    checked: s,
                    onChange: e => u(r, e),
                    label: ""
                })
            })]
        })
    })
}