/** chunk id: 482578 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(235986),
    s = n(985018),
    d = n(221314);
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
        h = a.useRef(null),
        x = null != n && "cancel" !== n.type,
        A = _ && n?.type !== "done",
        v = x || A;
    if (a.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && h.current?.focus()
        }, [n?.type]), !v) return null;
    let f = s.intl.string(s.t.i4jeWR);
    return n?.type === "submit" ? (t = "critical-primary", f = p ? s.intl.string(d.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : n?.type === "next" ? f = s.intl.string(s.t.PDTjLN) : n?.type === "cancel" && (f = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, l.jsx)(r.jlY, {
        "data-migration-pending": !0,
        direction: i.A.Direction.HORIZONTAL,
        className: g,
        children: (0, l.jsxs)(r.ButtonGroup, {
            fullWidth: !0,
            children: [A && (0, l.jsx)(r.Button, {
                onClick: m,
                variant: "secondary",
                disabled: o,
                text: s.intl.string(s.t["13/7kX"])
            }), x && (0, l.jsx)(r.Button, {
                onClick: () => {
                    null != n && u(n)
                },
                variant: t,
                disabled: o || c,
                buttonRef: h,
                text: f
            })]
        })
    })
}