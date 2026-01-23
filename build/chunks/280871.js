/** Chunk was on 86317 **/
/** chunk id: 280871, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(974930),
    s = n(985018);

function c(e) {
    let {
        startDate: t,
        recurrenceRule: n,
        onRecurrenceChange: c
    } = e, o = r.useMemo(() => (0, a.z7)(t, n), [n, t]), u = (0, a.Xx)(t);
    return (0, l.jsx)(i.l6P, {
        label: s.intl.string(s.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: u,
        onSelectionChange: c,
        value: o,
        selectionMode: "single",
        fullWidth: !0
    })
}