/** Chunk was on 60667 **/
/** chunk id: 99499, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968),
    i = n(990078),
    l = n(397927),
    s = n(519412),
    a = n(985018);
let o = e => {
    let {
        onInvite: t,
        disabled: n
    } = e;
    return (0, r.jsx)(l.DUT, {
        onClick: n ? void 0 : t,
        children: (0, r.jsx)(i.m, {
            text: a.intl.string(s.default["U/DzKb"]),
            shouldShow: !n,
            children: (0, r.jsx)(l.Rvf, {
                size: "sm",
                color: n ? l.LU0.colors.ICON_SUBTLE : l.LU0.colors.ICON_STRONG
            })
        })
    })
}