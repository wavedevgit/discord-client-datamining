/** chunk id: 482578 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(235986),
    s = n(985018),
    d = n(733045);
let o = e => {
    let t, {
            button: n,
            submitting: o,
            disableNext: c,
            onClick: u,
            canNavigateBack: _,
            onBackClicked: m,
            isModeratorReport: p,
            className: g
        } = e,
        x = a.useRef(null),
        h = null != n && "cancel" !== n.type,
        A = _ && n?.type !== "done",
        v = h || A;
    if (a.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && x.current?.focus()
        }, [n?.type]), !v) return null;
    let b = s.intl.string(s.t.i4jeWR);
    return n?.type === "submit" ? (t = "critical-primary", b = p ? s.intl.string(d.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : n?.type === "next" ? b = s.intl.string(s.t.PDTjLN) : n?.type === "cancel" && (b = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, l.jsx)(i.jlY, {
        "data-migration-pending": !0,
        direction: r.A.Direction.HORIZONTAL,
        className: g,
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
                buttonRef: x,
                text: b
            })]
        })
    })
}