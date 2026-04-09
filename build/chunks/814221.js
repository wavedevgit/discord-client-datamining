/** chunk id: 814221 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(183555),
    r = n(985018),
    o = n(618115);

function c() {
    let {
        trackUserProfileEditAction: e
    } = (0, s.NJ)(), t = l.useCallback(() => {
        e({
            action: "PRESS_ADD_WIDGET"
        }), (0, a.mMO)(async () => {
            let {
                default: t
            } = await n.e("87591").then(n.bind(n, 333114));
            return n => (0, i.jsx)(t, {
                ...n,
                trackUserProfileEditAction: e
            })
        }, {
            stackingBehavior: "stack"
        })
    }, [e]);
    return (0, i.jsxs)(a.DUT, {
        className: o.E,
        onClick: t,
        children: [(0, i.jsx)(a.j96, {
            size: "sm",
            color: "currentColor"
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: r.intl.string(r.t["lBG2s/"])
        })]
    })
}