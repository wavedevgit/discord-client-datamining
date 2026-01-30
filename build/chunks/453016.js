/** chunk id: 453016, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _V: () => s,
    aS: () => c,
    y4: () => u
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(31457),
    o = n(260197),
    a = n(985018);

function s(e) {
    let {
        value: t,
        placeholder: n,
        onChange: i,
        disabled: a,
        autofocus: s
    } = e;
    return (0, r.jsx)(l.ksK, {
        maxLength: o.cs,
        value: null != t ? t : "",
        placeholder: n,
        onChange: i,
        disabled: a,
        autoFocus: s
    })
}

function c(e) {
    let {
        formField: t
    } = e;
    return (0, r.jsx)(i._H, {
        title: t.label,
        children: (0, r.jsx)(l.fs1, {
            value: t.response,
            disabled: !0
        })
    })
}

function u(e) {
    let {
        formField: t,
        autofocus: n,
        onChange: l
    } = e;
    return (0, r.jsx)(i.cS, {
        title: t.label,
        children: (0, r.jsx)(s, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: a.intl.string(a.t["Sqn+Wh"])
        })
    })
}