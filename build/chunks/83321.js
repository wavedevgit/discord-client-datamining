/** chunk id: 83321 params = (module,exports,require) **/
n.d(t, {
    P: () => u
});
var i = n(271995),
    s = n(419954),
    l = n(933297),
    r = n(780964),
    a = n(524916),
    o = n(985018);
let d = (0, s.zZ)(r.X.ACCOUNT_STANDING_NESTED_CATEGORY, {
        buildLayout: () => [a.y]
    }),
    c = (0, s.t_)(r.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => o.intl.string(o.t["16r9jm"]),
        buildLayout: () => [d]
    }),
    u = (0, s.eA)(r.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: i.$b,
        useSubtitle: i.bh,
        useLeadingDecoration: function() {
            let {
                color: e,
                backgroundColor: t,
                Icon: n
            } = (0, i._k)();
            return {
                type: l.IJ.ICON,
                icon: n,
                color: e,
                backgroundColor: t
            }
        },
        buildLayout: () => [c]
    })