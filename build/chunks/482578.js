/** Chunk was on 58652 **/
/** chunk id: 482578, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(235986),
    s = n(985018),
    o = n(641131);
let d = e => {
    let t, {
            button: n,
            submitting: d,
            disableNext: c,
            onClick: u,
            canNavigateBack: m,
            onBackClicked: p,
            isModeratorReport: b
        } = e,
        x = r.useRef(null),
        g = null != n && "cancel" !== n.type,
        _ = m && (null == n ? void 0 : n.type) !== "done",
        h = g || _;
    if (r.useEffect(() => {
            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                var e;
                null == (e = x.current) || e.focus()
            }
        }, [null == n ? void 0 : n.type]), !h) return null;
    let v = s.intl.string(s.t.i4jeWR);
    return (null == n ? void 0 : n.type) === "submit" ? (t = "critical-primary", v = b ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : (null == n ? void 0 : n.type) === "next" ? v = s.intl.string(s.t.PDTjLN) : (null == n ? void 0 : n.type) === "cancel" && (v = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, l.jsx)(i.jlY, {
        "data-migration-pending": !0,
        direction: a.A.Direction.HORIZONTAL,
        children: (0, l.jsxs)(i.ButtonGroup, {
            fullWidth: !0,
            children: [_ && (0, l.jsx)(i.Button, {
                onClick: p,
                variant: "secondary",
                disabled: d,
                text: s.intl.string(s.t["13/7kX"])
            }), g && (0, l.jsx)(i.Button, {
                onClick: () => {
                    null != n && u(n)
                },
                variant: t,
                disabled: d || c,
                buttonRef: x,
                text: v
            })]
        })
    })
}