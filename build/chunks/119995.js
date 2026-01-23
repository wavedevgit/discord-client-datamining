/** Chunk was on 90948 **/
/** chunk id: 119995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => l
});
var i = n(627968),
    r = n(397927),
    a = n(985018),
    s = n(991635);

function l(e) {
    let {
        rewardName: t
    } = e;
    return (0, i.jsx)(r.Text, {
        variant: "text-xs/medium",
        className: s.tI,
        children: a.intl.format(a.t.loyTil, {
            rewardName: (e, n) => (0, i.jsx)(r.Text, {
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