/** chunk id: 533148 params = (module,exports,require) **/
s.d(t, {
    A: () => l
});
var n = s(627968),
    a = s(397927),
    r = s(927573);

function l(e) {
    let {
        value: t,
        onChange: s,
        error: l,
        disabled: i,
        autoFocus: o = !1
    } = e;
    return (0, n.jsx)(a.ksK, {
        leading: `${r.mu}/`,
        value: t,
        onChange: e => {
            s(e.replace(/ /g, "-"))
        },
        maxLength: 25,
        error: l,
        disabled: i,
        autoFocus: o
    })
}