/** chunk id: 414626 params = (module,exports,require) **/
l.d(t, {
    CI: () => o,
    MZ: () => d,
    mR: () => C
});
var n = l(627968),
    i = l(64700),
    s = l(158954),
    a = l(31457),
    r = l(453016);

function C(e) {
    let {
        disabled: t,
        field: l,
        value: a,
        onChange: r
    } = e, {
        choices: C
    } = l, o = i.useMemo(() => C.map((e, t) => ({
        name: e,
        value: t
    })), [C]);
    return (0, n.jsx)(s.z6M, {
        options: o,
        value: a,
        onChange: e => r?.({
            value: e
        }),
        disabled: t
    })
}

function o(e) {
    let {
        formField: t
    } = e, l = null != t.response ? t.choices[t.response] : "";
    return (0, n.jsx)(a._H, {
        title: t.label,
        children: (0, n.jsx)(r._V, {
            value: l,
            disabled: !0
        })
    })
}

function d(e) {
    let {
        formField: t,
        onChange: l
    } = e;
    return (0, n.jsx)(a.cS, {
        title: t.label,
        children: (0, n.jsx)(C, {
            field: t,
            value: t.response,
            onChange: l
        })
    })
}