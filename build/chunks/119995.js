/** chunk id: 119995 params = (module,exports,require) **/
n.d(e, {
    r: () => l
});
var i = n(627968),
    s = n(397927),
    a = n(985018),
    r = n(462428);

function l(t) {
    let {
        rewardName: e
    } = t;
    return (0, i.jsx)(s.Text, {
        variant: "text-xs/medium",
        className: r.tI,
        children: a.intl.format(a.t.loyTil, {
            rewardName: (t, n) => (0, i.jsx)(s.Text, {
                variant: "text-xs/medium",
                className: r.Ht,
                children: e
            }, n),
            verticalDivider: (t, e) => (0, i.jsx)("div", {
                className: r.yF
            }, e)
        })
    })
}