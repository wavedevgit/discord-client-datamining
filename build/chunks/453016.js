/** chunk id: 453016 params = (module,exports,require) **/
l.d(t, {
    _V: () => C,
    aS: () => o,
    y4: () => d
});
var n = l(627968);
l(64700);
var i = l(397927),
    s = l(31457),
    a = l(260197),
    r = l(985018);

function C(e) {
    let {
        value: t,
        placeholder: l,
        onChange: s,
        disabled: r,
        autofocus: C
    } = e;
    return (0, n.jsx)(i.ksK, {
        maxLength: a.cs,
        value: t ?? "",
        placeholder: l,
        onChange: s,
        disabled: r,
        autoFocus: C
    })
}

function o(e) {
    let {
        formField: t
    } = e;
    return (0, n.jsx)(s._H, {
        title: t.label,
        children: (0, n.jsx)(i.fs1, {
            value: t.response,
            disabled: !0
        })
    })
}

function d(e) {
    let {
        formField: t,
        autofocus: l,
        onChange: i
    } = e;
    return (0, n.jsx)(s.cS, {
        title: t.label,
        children: (0, n.jsx)(C, {
            onChange: i,
            value: t.response,
            autofocus: l,
            placeholder: r.intl.string(r.t["Sqn+Wh"])
        })
    })
}