/** chunk id: 292366, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(735438),
    o = n(421380),
    s = n(397927),
    c = n(442433),
    u = n(565645),
    d = n(155718),
    p = n(30008),
    m = n(957565),
    f = n(307600),
    O = n(207963),
    b = n(489414),
    y = n(985018),
    h = n(592392);

function j(e) {
    let {
        url: t,
        onSelect: n
    } = e;
    return m.p5 && null != t ? (0, r.jsx)(s.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "component-button",
        onClose: c.Z_,
        "aria-label": y.intl.string(y.t.tvTXy8),
        onSelect: n,
        children: (0, r.jsx)(s.rXV, {
            children: (0, r.jsx)(s.Drp, {
                id: "copy",
                label: y.intl.string(y.t.uHhnfa),
                action: () => (0, m.C)(t)
            })
        })
    }) : null
}

function g(e) {
    let t, {
            label: n,
            style: l,
            disabled: m,
            emoji: y,
            url: g,
            skuId: A
        } = e,
        {
            executeStateUpdate: v,
            visualState: E,
            isDisabled: C
        } = (0, O.At)(e),
        x = (0, p.Q)(A),
        N = null != A && l === d.in.PREMIUM,
        I = N && (null == x ? void 0 : x.disabled),
        P = N ? null == x ? void 0 : x.label : n,
        S = null != y,
        _ = null != P && P.length > 0,
        T = l === d.in.LINK && null != g && g.length > 0,
        R = E === b.BB.LOADING || N && null == x;
    return t = T ? () => {
        (0, f.h)({
            href: null != g ? g : "",
            shouldConfirm: !0
        })
    } : N ? null != x && !1 === x.disabled ? x.onClick : i.noop : () => v(), (0, r.jsxs)(o.$n, {
        "data-migration-pending": !0,
        color: function(e) {
            switch (e) {
                case d.in.PRIMARY:
                case d.in.PREMIUM:
                    return o.$n.Colors.BRAND;
                case d.in.SUCCESS:
                    return o.$n.Colors.GREEN;
                case d.in.DESTRUCTIVE:
                    return o.$n.Colors.RED;
                default:
                    return o.$n.Colors.PRIMARY
            }
        }(l),
        size: o.$n.Sizes.SMALL,
        disabled: m || E === b.BB.DISABLED || C || I,
        onClick: t,
        onContextMenu: e => {
            T && (0, c.jA)(e, e => {
                var t, n;
                return (0, r.jsx)(j, (t = function(e) {
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
                }({}, e), n = n = {
                    url: g
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
            })
        },
        role: T ? "link" : "button",
        children: [(0, r.jsxs)("div", {
            className: a()(h.Qs, {
                [h.R]: R,
                [h.M2]: N
            }),
            "aria-hidden": R,
            children: [N ? (0, r.jsx)("div", {
                className: h.sV,
                children: (0, r.jsx)(s.U1X, {
                    size: "xs",
                    color: "white"
                })
            }) : null, S ? (0, r.jsx)(u.A, {
                className: a()({
                    [h.MR]: _
                }),
                src: y.src,
                emojiId: y.id,
                emojiName: y.name,
                animated: y.animated
            }) : null, _ ? (0, r.jsx)("div", {
                className: h.Pf,
                children: P
            }) : null, T ? (0, r.jsx)(s.tfB, {
                size: "xs",
                color: "currentColor",
                className: h.LE
            }) : null]
        }), R ? (0, r.jsx)("div", {
            className: h.Lq,
            children: (0, r.jsx)(s.nvX, {
                dotRadius: 3.5,
                themed: !0
            })
        }) : null]
    })
}