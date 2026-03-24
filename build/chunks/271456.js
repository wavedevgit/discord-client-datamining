/** chunk id: 271456 params = (module,exports,require) **/
i.d(n, {
    A: () => u
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(147087),
    s = i(867455),
    d = i(780057),
    o = i(985018);

function u(t) {
    let n = (0, r.bG)([d.A], () => d.A.isInProgress());
    return (0, a.b)() && t.isThread() ? (0, e.jsx)(l.Drp, {
        id: "summarize-thread",
        label: n ? o.intl.string(o.t.oKECxB) : o.intl.string(o.t.EXfguE),
        disabled: n,
        loading: n,
        action: () => s.A.summarizeThread(t),
        children: n ? null : (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(l.Drp, {
                id: "summarize_thread_for_everyone",
                label: o.intl.string(o.t.eCzSdd),
                action: () => s.A.summarizeThread(t, !1),
                icon: l.nFg,
                leadingAccessory: {
                    type: "icon",
                    icon: l.nFg
                }
            }), (0, e.jsx)(l.Drp, {
                id: "summarize_thread_for_me",
                label: o.intl.string(o.t["HOe+Hq"]),
                action: () => s.A.summarizeThread(t),
                icon: l.nys,
                leadingAccessory: {
                    type: "icon",
                    icon: l.nys
                }
            })]
        })
    }) : null
}