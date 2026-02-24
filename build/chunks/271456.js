/** chunk id: 271456, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => u
});
var i = e(627968);
e(64700);
var a = e(311907),
    l = e(397927),
    r = e(147087),
    s = e(867455),
    d = e(780057),
    o = e(985018);

function u(t) {
    let n = (0, a.bG)([d.A], () => d.A.isInProgress());
    return (0, r.b)() && t.isThread() ? (0, i.jsx)(l.Drp, {
        id: "summarize-thread",
        label: n ? o.intl.string(o.t.oKECxB) : o.intl.string(o.t.EXfguE),
        disabled: n,
        loading: n,
        action: () => s.A.summarizeThread(t),
        children: n ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Drp, {
                id: "summarize_thread_for_everyone",
                label: o.intl.string(o.t.eCzSdd),
                action: () => s.A.summarizeThread(t, !1),
                icon: l.nFg,
                leadingAccessory: {
                    type: "icon",
                    icon: l.nFg
                }
            }), (0, i.jsx)(l.Drp, {
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