/** chunk id: 453016 params = (module,exports,require) **/
l.d(t, {
    _V: () => d,
    aS: () => o,
    y4: () => c
});
var n = l(627968);
l(64700);
var s = l(397927),
    i = l(31457),
    a = l(260197),
    r = l(985018);

function d(e) {
    let {
        value: t,
        placeholder: l,
        onChange: i,
        disabled: r,
        autofocus: d
    } = e;
    return (0, n.jsx)(s.ksK, {
        maxLength: a.cs,
        value: t ?? "",
        placeholder: l,
        onChange: i,
        disabled: r,
        autoFocus: d
    })
}

function o(e) {
    let {
        formField: t
    } = e;
    return (0, n.jsx)(i._H, {
        title: t.label,
        children: (0, n.jsx)(s.fs1, {
            value: t.response,
            disabled: !0
        })
    })
}

function c(e) {
    let {
        formField: t,
        autofocus: l,
        onChange: s
    } = e;
    return (0, n.jsx)(i.cS, {
        title: t.label,
        children: (0, n.jsx)(d, {
            onChange: s,
            value: t.response,
            autofocus: l,
            placeholder: r.intl.string(r.t["Sqn+Wh"])
        })
    })
}