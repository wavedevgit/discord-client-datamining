/** Chunk was on 39048 **/
/** chunk id: 324898, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j,
    W: () => x
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(136722),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(317525),
    u = n(576705),
    g = n(488926),
    m = n(349828),
    p = n(124759),
    f = n(985018),
    h = n(690450);

function b(e) {
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
}

function x(e) {
    return p.dR.filter(t => (null == e ? void 0 : e.id) !== m.V && g.Ib(t, e))
}

function j(e) {
    let {
        guild: t
    } = e, i = (0, a.bG)([d.A], () => d.A.getEveryoneRole(t)), g = x(t), m = g.length > 0, j = p.dR.some(e => {
        var n, r;
        return !u.A.can(e, t, null, {
            [i.id]: (n = b({}, i), r = r = {
                permissions: s.TF(i.permissions, e)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n)
        })
    }), _ = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: h.Ly,
            children: [(0, r.jsx)(c.Heading, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: f.intl.string(f.t["+vaUlM"])
            }), (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: f.intl.format(f.t.RXAtdO, {
                    numPerms: g.length
                })
            })]
        }), m ? (0, r.jsx)(c.EpV, {
            size: "custom",
            color: "currentColor",
            height: 24,
            width: 24,
            className: h.$e,
            "aria-label": f.intl.string(f.t["bG7Gu+"])
        }) : (0, r.jsx)(c.yr3, {
            size: "custom",
            color: "currentColor",
            height: 24,
            width: 24,
            className: h.z6,
            "aria-label": f.intl.string(f.t.YQix8y)
        })]
    });
    return m ? j ? (0, r.jsx)(o.m, {
        text: f.intl.string(f.t["E5v/a/"]),
        children: (0, r.jsx)("div", {
            className: l()(h.ph, h.r9),
            children: _
        })
    }) : (0, r.jsx)(c.DUT, {
        onClick: () => {
            (0, c.mMO)(async () => {
                let {
                    default: e
                } = await n.e("94286").then(n.bind(n, 868952));
                return n => (0, r.jsx)(e, b({
                    guild: t
                }, n))
            })
        },
        className: l()(h.ph, h.vk),
        children: _
    }) : (0, r.jsx)("div", {
        className: h.ph,
        children: _
    })
}