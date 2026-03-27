/** chunk id: 453016 params = (module,exports,require) **/
n.d(t, {
    _V: () => o,
    aS: () => d,
    y4: () => c
});
var r = n(627968);
n(64700);
var s = n(397927),
    i = n(31457),
    l = n(260197),
    a = n(985018);

function o(e) {
    let {
        value: t,
        placeholder: n,
        onChange: i,
        disabled: a,
        autofocus: o
    } = e;
    return (0, r.jsx)(s.ksK, {
        maxLength: l.cs,
        value: t ?? "",
        placeholder: n,
        onChange: i,
        disabled: a,
        autoFocus: o
    })
}

function d(e) {
    let {
        formField: t
    } = e;
    return (0, r.jsx)(i._H, {
        title: t.label,
        children: (0, r.jsx)(s.fs1, {
            value: t.response,
            disabled: !0
        })
    })
}

function c(e) {
    let {
        formField: t,
        autofocus: n,
        onChange: s
    } = e;
    return (0, r.jsx)(i.cS, {
        title: t.label,
        children: (0, r.jsx)(o, {
            onChange: s,
            value: t.response,
            autofocus: n,
            placeholder: a.intl.string(a.t["Sqn+Wh"])
        })
    })
}