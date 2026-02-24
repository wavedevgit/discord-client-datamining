/** chunk id: 453016, original params: e,a,t (module,exports,require) **/
t.d(a, {
    _V: () => i,
    aS: () => c,
    y4: () => d
});
var n = t(627968);
t(64700);
var r = t(397927),
    s = t(31457),
    l = t(260197),
    o = t(985018);

function i(e) {
    let {
        value: a,
        placeholder: t,
        onChange: s,
        disabled: o,
        autofocus: i
    } = e;
    return (0, n.jsx)(r.ksK, {
        maxLength: l.cs,
        value: a ?? "",
        placeholder: t,
        onChange: s,
        disabled: o,
        autoFocus: i
    })
}

function c(e) {
    let {
        formField: a
    } = e;
    return (0, n.jsx)(s._H, {
        title: a.label,
        children: (0, n.jsx)(r.fs1, {
            value: a.response,
            disabled: !0
        })
    })
}

function d(e) {
    let {
        formField: a,
        autofocus: t,
        onChange: r
    } = e;
    return (0, n.jsx)(s.cS, {
        title: a.label,
        children: (0, n.jsx)(i, {
            onChange: r,
            value: a.response,
            autofocus: t,
            placeholder: o.intl.string(o.t["Sqn+Wh"])
        })
    })
}