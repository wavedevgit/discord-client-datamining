/** chunk id: 6939 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(51271),
    s = n(985018),
    o = n(714001);
let d = function(e) {
    let {
        onWithdrawApplication: t,
        guild: n = null
    } = e, d = n?.id;
    return a.useEffect(() => {
        null != d && (0, l.NC)(d)
    }, [d]), (0, i.jsxs)("div", {
        className: o.EL,
        children: [(0, i.jsx)("div", {
            className: o.P0,
            children: (0, i.jsx)(r.Qfk, {
                size: "md",
                color: r.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, i.jsxs)("div", {
            className: o.bc,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: n?.name != null ? s.intl.formatToPlainString(s.t["0Qlu/6"], {
                    guildName: n.name
                }) : s.intl.string(s.t["5iLvSx"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: s.intl.string(s.t.FdsK4h)
            })]
        }), (0, i.jsx)(r.Button, {
            fullWidth: !0,
            onClick: t,
            variant: "critical-primary",
            size: "md",
            text: s.intl.string(s.t.g9tK0o)
        })]
    })
}