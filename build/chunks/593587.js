/** chunk id: 593587 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968),
    a = n(397927),
    l = n(890687),
    s = n(985018);
let r = function(e) {
    let {
        quest: t,
        size: n
    } = e, r = (0, l.S5)(t.config.expiresAt, {
        month: "numeric",
        day: "numeric"
    });
    return (0, i.jsx)(a.Button, {
        variant: "secondary",
        disabled: !0,
        fullWidth: !0,
        size: n,
        text: s.intl.format(s.t["14o6QY"], {
            expiryDate: r
        })
    })
}