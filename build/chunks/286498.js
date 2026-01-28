/** Chunk was on 78528 **/
/** chunk id: 286498, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(747238);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(837381),
    a = n(311907),
    o = n(397927),
    c = n(297413),
    u = n(966327),
    d = n(235986),
    p = n(290863),
    h = n(427262),
    f = n(318880);

function g(e) {
    var t, n;
    let {
        user: l,
        row: g,
        hideDiscriminator: m,
        comparator: b,
        selected: A,
        checked: y,
        disabled: _ = !1,
        onClick: O,
        onMouseEnter: j,
        "aria-setsize": v,
        "aria-posinset": x
    } = e, E = (0, a.bG)([p.A], () => p.A.getStatus(l.id)), C = (0, s.rm)(String(l.id));
    return (0, r.jsx)(o.DUT, (t = function(e) {
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
    }({
        id: "user-row-".concat(g),
        className: i()(f.Se, {
            [f.r9]: _
        }),
        onClick: () => {
            null != O && O(l.id)
        },
        onMouseEnter: () => {
            null != j && j(g)
        }
    }, C), n = n = {
        role: "option",
        "aria-selected": y,
        "aria-disabled": _,
        "aria-setsize": v,
        "aria-posinset": x,
        children: (0, r.jsxs)(d.A, {
            align: d.A.Align.CENTER,
            className: i()(f.Bc, {
                [f.oz]: A
            }),
            children: [(0, r.jsx)(u.A, {
                user: l,
                status: E,
                className: f.my
            }), (0, r.jsxs)(d.A, {
                className: f.YW,
                align: d.A.Align.BASELINE,
                direction: d.A.Direction.VERTICAL,
                children: [(0, r.jsx)(o.Text, {
                    tag: "strong",
                    className: f.$R,
                    "aria-hidden": !0,
                    variant: "text-md/medium",
                    children: null != b && b === l.tag ? h.Ay.getName(l) : null != b && "" !== b ? b : h.Ay.getName(l)
                }), (0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: (0, r.jsx)(c.A, {
                        user: l,
                        hideDiscriminator: m,
                        className: f.xK,
                        usernameClass: f.__invalid_weightMedium,
                        discriminatorClass: f.__invalid_weightMedium,
                        forceUsername: !0
                    })
                })]
            }), (0, r.jsx)(o.P7L, {
                checked: y,
                disabled: _
            })]
        })
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
}