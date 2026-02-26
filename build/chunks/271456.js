/** chunk id: 271456, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => u
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(147087),
    d = e(867455),
    s = e(780057),
    o = e(985018);

function u(t) {
    let n = (0, l.bG)([s.A], () => s.A.isInProgress());
    return (0, a.b)() && t.isThread() ? (0, i.jsx)(r.Drp, {
        id: "summarize-thread",
        label: n ? o.intl.string(o.t.oKECxB) : o.intl.string(o.t.EXfguE),
        disabled: n,
        loading: n,
        action: () => d.A.summarizeThread(t),
        children: n ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.Drp, {
                id: "summarize_thread_for_everyone",
                label: o.intl.string(o.t.eCzSdd),
                action: () => d.A.summarizeThread(t, !1),
                icon: r.nFg,
                leadingAccessory: {
                    type: "icon",
                    icon: r.nFg
                }
            }), (0, i.jsx)(r.Drp, {
                id: "summarize_thread_for_me",
                label: o.intl.string(o.t["HOe+Hq"]),
                action: () => d.A.summarizeThread(t),
                icon: r.nys,
                leadingAccessory: {
                    type: "icon",
                    icon: r.nys
                }
            })]
        })
    }) : null
}