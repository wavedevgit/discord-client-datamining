/** Chunk was on 49559 **/
/** chunk id: 343778, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(207963);

function o(e) {
    let {
        type: t,
        options: n,
        required: o,
        maxValues: s
    } = e, c = l.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
        state: u,
        executeStateUpdate: d
    } = (0, i.At)(e, c.length > 0 ? {
        type: t,
        values: c
    } : void 0), p = l.useMemo(() => (null == u ? void 0 : u.type) === t ? u.values : [], [u, t]);
    return (0, r.jsx)(a.$QX, {
        options: n.map(e => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: p.length >= s && !p.includes(e.value)
        })),
        selectedValues: p,
        onChange: e => {
            d({
                type: t,
                values: e
            })
        },
        required: o
    })
}