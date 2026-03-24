/** chunk id: 463938 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(837381),
    a = n(311907),
    r = n(827734),
    o = n(397927),
    c = n(701785),
    d = n(65995),
    u = n(976860),
    h = n(147925),
    A = n(652215),
    m = n(746080),
    _ = n(985018),
    p = n(949684);

function g(e, t) {
    return (0, i.jsx)(o.Text, {
        variant: "text-xs/bold",
        color: "text-default",
        children: e
    }, t)
}
let f = s.memo(function(e) {
    let {
        guild: t
    } = e, n = (0, a.bG)([c.h], () => c.h.getNewMemberActions(t.id), [t.id]), f = (0, a.bG)([d.A], () => d.A.getCompletedActions(t.id)), x = s.useMemo(() => {
        if (null == n || null == f) return 0;
        let e = 0;
        return n.forEach(t => {
            null != f[t.channelId] && e++
        }), e
    }, [f, n]), C = null == n ? 0 : n.length, E = (0, l.rm)(`progress-bar-${t.id}`);
    return (0, i.jsxs)("li", {
        children: [(0, i.jsxs)(o.DUT, {
            ...E,
            role: "button",
            focusProps: {
                offset: {
                    right: 4
                }
            },
            className: p.G9,
            onClick: function() {
                (0, u.pX)(A.BVt.CHANNEL(t.id, m.VV.GUILD_HOME))
            },
            children: [(0, i.jsxs)("div", {
                className: p.A1,
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-sm/bold",
                    children: _.intl.string(_.t.SnrR3x)
                }), (0, i.jsxs)("div", {
                    className: p.Ib,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: p.Cv,
                        children: _.intl.format(_.t.eqZ1lW, {
                            numberHook: g,
                            total: C.toString(),
                            completed: x.toString()
                        })
                    }), (0, i.jsx)(h.A, {
                        className: p.UE,
                        width: 16,
                        height: 16,
                        direction: h.A.Directions.RIGHT
                    })]
                })]
            }), (0, i.jsx)(o.iCB, {
                className: p.hr,
                foregroundGradientColor: [r.A.unsafe_rawColors.GREEN_300.css, r.A.unsafe_rawColors.GREEN_230.css],
                percent: x / C * 100 + 3,
                animate: !0
            })]
        }), (0, i.jsx)("div", {
            role: "separator",
            className: p.yF
        })]
    })
})