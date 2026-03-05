/** chunk id: 387265, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(554146),
    l = n(397927),
    r = n(617617),
    o = n(256787),
    d = n(20439);
let c = i.memo(function(e) {
    let {
        className: t,
        content: n,
        onChange: c
    } = e, u = s.M[n], {
        isDismissed: m,
        handleToggleDismissState: h
    } = (0, d.A)(u), [x, p] = i.useState(!1), g = i.useCallback(() => {
        c?.(n), h()
    }, [c, h, n]), _ = i.useCallback(e => {
        e.preventDefault(), p(!0), navigator.clipboard.writeText(n.toLowerCase())
    }, [n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(l.BJc, {
            className: t,
            direction: "horizontal",
            align: "center",
            children: [(0, a.jsx)(l.K0, {
                size: "sm",
                variant: "icon-only",
                icon: x ? l.ODX : l.sjE,
                onClick: _,
                "aria-label": x ? "Copied" : "Copy"
            }), (0, a.jsx)(l.dOG, {
                label: `${n.toLowerCase()} (${s.M[n]})`,
                description: (0, o.Zm)(u) ? function(e) {
                    let t = r.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                    if (null == t) return null;
                    let n = [],
                        {
                            lastDismissedVersion: a,
                            lastDismissedAtMs: i,
                            lastDismissedObjectId: s
                        } = t;
                    if (void 0 !== a && 0 !== a && n.push(`last_dismissed_version: ${a}`), void 0 !== i) {
                        let e = Number(i),
                            t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                        n.push(`last_dismissed_at: ${t}`)
                    }
                    return (void 0 !== s && "0" !== s && n.push(`last_dismissed_object_id: ${s}`), 0 === n.length) ? null : n.join(", ")
                }(u) : null,
                checked: m,
                onChange: g
            })]
        }), (0, a.jsx)(l.cGx, {})]
    })
})