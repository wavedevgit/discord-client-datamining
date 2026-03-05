/** chunk id: 482578 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(235986),
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
            isModeratorReport: x
        } = e,
        p = a.useRef(null),
        g = null != n && "cancel" !== n.type,
        h = _ && n?.type !== "done",
        A = g || h;
    if (a.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && p.current?.focus()
        }, [n?.type]), !A) return null;
    let v = s.intl.string(s.t.i4jeWR);
    return n?.type === "submit" ? (t = "critical-primary", v = x ? s.intl.string(d.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : n?.type === "next" ? v = s.intl.string(s.t.PDTjLN) : n?.type === "cancel" && (v = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, l.jsx)(r.jlY, {
        "data-migration-pending": !0,
        direction: i.A.Direction.HORIZONTAL,
        children: (0, l.jsxs)(r.ButtonGroup, {
            fullWidth: !0,
            children: [h && (0, l.jsx)(r.Button, {
                onClick: m,
                variant: "secondary",
                disabled: o,
                text: s.intl.string(s.t["13/7kX"])
            }), g && (0, l.jsx)(r.Button, {
                onClick: () => {
                    null != n && u(n)
                },
                variant: t,
                disabled: o || c,
                buttonRef: p,
                text: v
            })]
        })
    })
}