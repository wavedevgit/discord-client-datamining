/** chunk id: 343778, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var l = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(207963);

function i(e) {
    let {
        type: t,
        options: n,
        required: i,
        maxValues: o
    } = e, c = a.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
        state: d,
        executeStateUpdate: u
    } = (0, s.At)(e, c.length > 0 ? {
        type: t,
        values: c
    } : void 0), m = a.useMemo(() => d?.type === t ? d.values : [], [d, t]);
    return (0, l.jsx)(r.$QX, {
        options: n.map(e => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: m.length >= o && !m.includes(e.value)
        })),
        selectedValues: m,
        onChange: e => {
            u({
                type: t,
                values: e
            })
        },
        required: i
    })
}