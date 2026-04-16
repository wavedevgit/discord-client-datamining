/** chunk id: 814221 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(183555),
    r = n(985018),
    o = n(106878);

function c() {
    let {
        trackUserProfileEditAction: e
    } = (0, s.NJ)(), t = a.useCallback(() => {
        e({
            action: "PRESS_ADD_WIDGET"
        }), (0, l.mMO)(async () => {
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
    return (0, i.jsxs)(l.DUT, {
        className: o.E,
        onClick: t,
        children: [(0, i.jsx)(l.j96, {
            size: "sm",
            color: "currentColor"
        }), (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: r.intl.string(r.t["lBG2s/"])
        })]
    })
}