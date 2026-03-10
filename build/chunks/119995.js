/** chunk id: 119995 params = (module,exports,require) **/
n.d(t, {
    r: () => l
});
var i = n(627968),
    a = n(397927),
    s = n(985018),
    r = n(991635);

function l(e) {
    let {
        rewardName: t
    } = e;
    return (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        className: r.tI,
        children: s.intl.format(s.t.loyTil, {
            rewardName: (e, n) => (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                className: r.Ht,
                children: t
            }, n),
            verticalDivider: (e, t) => (0, i.jsx)("div", {
                className: r.yF
            }, t)
        })
    })
}