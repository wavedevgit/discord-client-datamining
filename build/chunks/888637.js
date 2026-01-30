/** chunk id: 888637, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => h
});
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(397927),
    a = n(661191),
    u = n(555407),
    c = n(349112),
    o = n(985018),
    d = n(150837);

function h(t) {
    let {
        guildId: e,
        recurrenceRule: n,
        guildEventId: i,
        onRecurrenceClick: h,
        hideScroller: v = !1,
        activeRecurrenceId: m
    } = t, {
        recurrenceStartTimes: g,
        canViewMoreRecurrences: f,
        updateRecurrenceStartTimes: x
    } = (0, u.A)(i, e, n), p = v ? "div" : s.HOs;
    return (0, l.jsxs)("div", {
        className: d.w5,
        children: [(0, l.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            className: d.R_,
            children: o.intl.string(o.t["D/jjoa"])
        }), (0, l.jsxs)(p, {
            className: r()(d.XG, {
                [d.cq]: !v
            }),
            children: [g.map(t => {
                let e = a.default.fromTimestamp(t.getTime());
                return (0, l.jsx)(c.A, {
                    recurrenceId: e,
                    originalScheduledStartTime: t,
                    guildEventId: i,
                    onClick: h,
                    isActive: e === m
                }, e)
            }), f && (0, l.jsx)("div", {
                className: d.UD,
                children: (0, l.jsx)(s.QWc, {
                    onClick: t => {
                        t.stopPropagation(), x()
                    },
                    text: o.intl.string(o.t["8O7Hpy"]),
                    size: "sm"
                })
            })]
        })]
    })
}