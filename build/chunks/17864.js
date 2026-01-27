/** Chunk was on 35894 **/
/** chunk id: 17864, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(989349),
    o = n.n(i),
    a = n(417597),
    s = n(397927),
    c = n(551816),
    u = n(134413),
    d = n(266047),
    C = n(221950),
    m = n(985018),
    p = n(918372),
    f = n(27786);

function b(e) {
    let {
        guild: t,
        onSubmit: i
    } = e, b = (0, a.bG)([d.A], () => d.A.getMembersCountByGuildId(t.id, c.Tu.NEW_GUILD_MEMBER), [t.id]), j = (0, a.bG)([d.A], () => {
        let e = d.A.getNewMemberTimestamp(t.id);
        return o()(e).format("h:mm A")
    }, [t.id]), g = (0, a.bG)([d.A], () => d.A.hasDefaultSearchStateByGuildId(t.id), [t.id]), h = l.useCallback(() => {
        (0, C.UD)(t.id), null == i || i()
    }, [t.id, i]), x = l.useCallback(() => {
        g ? h() : (0, s.mMO)(async () => {
            let {
                default: e
            } = await n.e("56562").then(n.bind(n, 470857));
            return t => {
                var n, l;
                return (0, r.jsx)(e, (n = function(e) {
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
                }({}, t), l = l = {
                    onConfirm: h
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
            }
        })
    }, [h, g]), y = new Intl.NumberFormat(m.intl.currentLocale).format(b), O = (0, u.Y0)(t.id), v = (0, u.vA)(t.id), _ = l.useMemo(() => 1 + +!!O + +!!v, [O, v]);
    return 0 === b ? null : (0, r.jsxs)("tr", {
        className: f.iS,
        onClick: x,
        children: [(0, r.jsx)("td", {
            colSpan: 3,
            children: (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: m.intl.format(m.t["/i5uJ1"], {
                    count: y,
                    date: j
                })
            })
        }), (0, r.jsx)("td", {
            colSpan: _
        }), (0, r.jsx)("td", {
            colSpan: 2,
            children: (0, r.jsx)("div", {
                className: p.$E,
                children: (0, r.jsx)(s.DUT, {
                    onClick: x,
                    className: f.Fu,
                    children: (0, r.jsxs)(s.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: f.Lb,
                        children: [(0, r.jsx)("div", {
                            children: m.intl.string(m.t.rkyOzK)
                        }), (0, r.jsx)(s.nys, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: f.Ke
                        })]
                    })
                })
            })
        })]
    })
}