/** chunk id: 593587 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968),
    a = n(397927),
    l = n(890687),
    r = n(985018);
let s = function(e) {
    let {
        quest: t,
        size: n
    } = e, s = (0, l.S5)(t.config.expiresAt, {
        month: "numeric",
        day: "numeric"
    });
    return (0, i.jsx)(a.Button, {
        variant: "secondary",
        disabled: !0,
        fullWidth: !0,
        size: n,
        text: r.intl.format(r.t["6p8BZx"], {
            expiryDate: s
        })
    })
}