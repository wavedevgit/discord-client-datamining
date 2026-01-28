/** Chunk was on 78528 **/
/** chunk id: 463938, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(837381),
    s = n(311907),
    a = n(827734),
    o = n(397927),
    c = n(701785),
    u = n(65995),
    d = n(976860),
    p = n(147925),
    h = n(652215),
    f = n(746080),
    g = n(985018),
    m = n(949684);

function b(e, t) {
    return (0, r.jsx)(o.Text, {
        variant: "text-xs/bold",
        color: "text-default",
        children: e
    }, t)
}
let A = l.memo(function(e) {
    var t, n;
    let {
        guild: A
    } = e, y = (0, s.bG)([c.h], () => c.h.getNewMemberActions(A.id), [A.id]), _ = (0, s.bG)([u.A], () => u.A.getCompletedActions(A.id)), O = l.useMemo(() => {
        if (null == y || null == _) return 0;
        let e = 0;
        return y.forEach(t => {
            null != _[t.channelId] && e++
        }), e
    }, [_, y]), j = null == y ? 0 : y.length, v = (0, i.rm)("progress-bar-".concat(A.id));
    return (0, r.jsxs)("li", {
        children: [(0, r.jsxs)(o.DUT, (t = function(e) {
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
        }({}, v), n = n = {
            role: "button",
            focusProps: {
                offset: {
                    right: 4
                }
            },
            className: m.G9,
            onClick: function() {
                (0, d.pX)(h.BVt.CHANNEL(A.id, f.VV.GUILD_HOME))
            },
            children: [(0, r.jsxs)("div", {
                className: m.A1,
                children: [(0, r.jsx)(o.Heading, {
                    variant: "heading-sm/bold",
                    children: g.intl.string(g.t.SnrR3x)
                }), (0, r.jsxs)("div", {
                    className: m.Ib,
                    children: [(0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: m.Cv,
                        children: g.intl.format(g.t.eqZ1lW, {
                            numberHook: b,
                            total: j.toString(),
                            completed: O.toString()
                        })
                    }), (0, r.jsx)(p.A, {
                        className: m.UE,
                        width: 16,
                        height: 16,
                        direction: p.A.Directions.RIGHT
                    })]
                })]
            }), (0, r.jsx)(o.kej, {
                className: m.hr,
                foregroundGradientColor: [a.A.unsafe_rawColors.GREEN_300.css, a.A.unsafe_rawColors.GREEN_230.css],
                percent: O / j * 100 + 3,
                animate: !0
            })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)), (0, r.jsx)("div", {
            role: "separator",
            className: m.yF
        })]
    })
})