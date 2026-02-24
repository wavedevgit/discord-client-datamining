/** chunk id: 414626, original params: e,a,t (module,exports,require) **/
t.d(a, {
    CI: () => c,
    MZ: () => d,
    mR: () => i
});
var n = t(627968),
    r = t(64700),
    s = t(158954),
    l = t(31457),
    o = t(453016);

function i(e) {
    let {
        disabled: a,
        field: t,
        value: l,
        onChange: o
    } = e, {
        choices: i
    } = t, c = r.useMemo(() => i.map((e, a) => ({
        name: e,
        value: a
    })), [i]);
    return (0, n.jsx)(s.z6M, {
        options: c,
        value: l,
        onChange: e => o?.({
            value: e
        }),
        disabled: a
    })
}

function c(e) {
    let {
        formField: a
    } = e, t = null != a.response ? a.choices[a.response] : "";
    return (0, n.jsx)(l._H, {
        title: a.label,
        children: (0, n.jsx)(o._V, {
            value: t,
            disabled: !0
        })
    })
}

function d(e) {
    let {
        formField: a,
        onChange: t
    } = e;
    return (0, n.jsx)(l.cS, {
        title: a.label,
        children: (0, n.jsx)(i, {
            field: a,
            value: a.response,
            onChange: t
        })
    })
}