/** chunk id: 119995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => l
});
var i = n(627968),
    a = n(397927),
    r = n(985018),
    s = n(991635);

function l(e) {
    let {
        rewardName: t
    } = e;
    return (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        className: s.tI,
        children: r.intl.format(r.t.loyTil, {
            rewardName: (e, n) => (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                className: s.Ht,
                children: t
            }, n),
            verticalDivider: (e, t) => (0, i.jsx)("div", {
                className: s.yF
            }, t)
        })
    })
}