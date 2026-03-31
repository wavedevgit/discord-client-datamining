/** chunk id: 280871 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    i = n(64700),
    r = n(397927),
    a = n(974930),
    s = n(985018);

function c(e) {
    let {
        startDate: t,
        recurrenceRule: n,
        onRecurrenceChange: c
    } = e, d = i.useMemo(() => (0, a.z7)(t, n), [n, t]), o = (0, a.Xx)(t);
    return (0, l.jsx)(r.l6P, {
        label: s.intl.string(s.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: o,
        onSelectionChange: c,
        value: d,
        selectionMode: "single",
        fullWidth: !0
    })
}