/** chunk id: 482578 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(235986),
    s = n(985018),
    d = n(641131);
let o = e => {
    let t, {
            button: n,
            submitting: o,
            disableNext: c,
            onClick: u,
            canNavigateBack: _,
            onBackClicked: m,
            isModeratorReport: x,
            className: p
        } = e,
        g = a.useRef(null),
        h = null != n && "cancel" !== n.type,
        A = _ && n?.type !== "done",
        b = h || A;
    if (a.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && g.current?.focus()
        }, [n?.type]), !b) return null;
    let v = s.intl.string(s.t.i4jeWR);
    return n?.type === "submit" ? (t = "critical-primary", v = x ? s.intl.string(d.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : n?.type === "next" ? v = s.intl.string(s.t.PDTjLN) : n?.type === "cancel" && (v = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, l.jsx)(i.jlY, {
        "data-migration-pending": !0,
        direction: r.A.Direction.HORIZONTAL,
        className: p,
        children: (0, l.jsxs)(i.ButtonGroup, {
            fullWidth: !0,
            children: [A && (0, l.jsx)(i.Button, {
                onClick: m,
                variant: "secondary",
                disabled: o,
                text: s.intl.string(s.t["13/7kX"])
            }), h && (0, l.jsx)(i.Button, {
                onClick: () => {
                    null != n && u(n)
                },
                variant: t,
                disabled: o || c,
                buttonRef: g,
                text: v
            })]
        })
    })
}