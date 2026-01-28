/** Chunk was on 78528 **/
/** chunk id: 497140, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(837381),
    s = n(397927),
    a = n(791606),
    o = n(486020),
    c = n(900848),
    u = n(550591),
    d = n(794398);

function p(e) {
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

function h(e) {
    let [t, h] = l.useState(!1), f = (0, i.Vd)("guild-".concat(e.id));
    return (0, r.jsx)(c.c, {
        children: (0, r.jsx)(u.A, {
            text: e.name,
            children: (0, r.jsx)(s.Qk9, {
                className: d.o,
                selected: t,
                lowerBadge: (0, r.jsx)(s.fkz, {
                    icon: (0, s.kHD)(a.A),
                    disableColor: !0,
                    className: d._
                }),
                children: (0, r.jsx)(s.jlP, p({
                    name: e.name,
                    onMouseEnter: () => {
                        h(!0)
                    },
                    onMouseLeave: () => {
                        h(!1)
                    },
                    onClick: () => {
                        (0, s.mMO)(async () => {
                            let {
                                default: t
                            } = await n.e("42945").then(n.bind(n, 537560));
                            return n => (0, r.jsx)(t, p({
                                name: e.name,
                                guildId: e.id
                            }, n))
                        })
                    },
                    icon: null != e.icon ? o.Ay.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        canAnimate: !1,
                        size: 42
                    }) : null
                }, f))
            })
        })
    })
}