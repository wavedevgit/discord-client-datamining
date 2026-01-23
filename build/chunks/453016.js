/** Chunk was on 99583 **/
/** chunk id: 453016, original params: e,t,l (module,exports,require) **/
l.d(t, {
    _V: () => o,
    aS: () => c,
    y4: () => d
});
var n = l(627968);
l(64700);
var r = l(397927),
    i = l(31457),
    s = l(260197),
    a = l(985018);

function o(e) {
    let {
        value: t,
        placeholder: l,
        onChange: i,
        disabled: a,
        autofocus: o
    } = e;
    return (0, n.jsx)(r.ksK, {
        maxLength: s.cs,
        value: null != t ? t : "",
        placeholder: l,
        onChange: i,
        disabled: a,
        autoFocus: o
    })
}

function c(e) {
    let {
        formField: t
    } = e;
    return (0, n.jsx)(i._H, {
        title: t.label,
        children: (0, n.jsx)(r.fs1, {
            value: t.response,
            disabled: !0
        })
    })
}

function d(e) {
    let {
        formField: t,
        autofocus: l,
        onChange: r
    } = e;
    return (0, n.jsx)(i.cS, {
        title: t.label,
        children: (0, n.jsx)(o, {
            onChange: r,
            value: t.response,
            autofocus: l,
            placeholder: a.intl.string(a.t["Sqn+Wh"])
        })
    })
}