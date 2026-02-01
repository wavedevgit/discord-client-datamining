/** chunk id: 271456, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(147087),
    o = n(867455),
    s = n(780057),
    d = n(985018);

function u(t) {
    let e = (0, r.bG)([s.A], () => s.A.isInProgress());
    return (0, a.b)() && t.isThread() ? (0, i.jsx)(l.Drp, {
        id: "summarize-thread",
        label: e ? d.intl.string(d.t.oKECxB) : d.intl.string(d.t.EXfguE),
        disabled: e,
        loading: e,
        action: () => o.A.summarizeThread(t),
        children: e ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Drp, {
                id: "summarize_thread_for_everyone",
                label: d.intl.string(d.t.eCzSdd),
                action: () => o.A.summarizeThread(t, !1),
                icon: l.nFg,
                leadingAccessory: {
                    type: "icon",
                    icon: l.nFg
                }
            }), (0, i.jsx)(l.Drp, {
                id: "summarize_thread_for_me",
                label: d.intl.string(d.t["HOe+Hq"]),
                action: () => o.A.summarizeThread(t),
                icon: l.nys,
                leadingAccessory: {
                    type: "icon",
                    icon: l.nys
                }
            })]
        })
    }) : null
}