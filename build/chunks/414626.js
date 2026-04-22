/** chunk id: 414626 params = (module,exports,require) **/
l.d(t, {
    CI: () => o,
    MZ: () => c
});
var n = l(627968),
    s = l(64700),
    i = l(158954),
    a = l(31457),
    r = l(453016);

function d(e) {
    let {
        disabled: t,
        field: l,
        value: a,
        onChange: r
    } = e, {
        choices: d
    } = l, o = s.useMemo(() => d.map((e, t) => ({
        name: e,
        value: t
    })), [d]);
    return (0, n.jsx)(i.z6M, {
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

function c(e) {
    let {
        formField: t,
        onChange: l
    } = e;
    return (0, n.jsx)(a.cS, {
        title: t.label,
        children: (0, n.jsx)(d, {
            field: t,
            value: t.response,
            onChange: l
        })
    })
}