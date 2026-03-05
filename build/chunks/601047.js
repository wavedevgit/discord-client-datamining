/** chunk id: 601047, original params: e,a,t (module,exports,require) **/
t.d(a, {
    P1: () => c,
    PC: () => i,
    zD: () => d
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
    return (0, n.jsx)(r.fs1, {
        maxLength: l.nQ,
        value: a ?? "",
        placeholder: t ?? "",
        onChange: s,
        disabled: o,
        autoFocus: i,
        autosize: !0,
        showRemainingCharacterCount: !o
    })
}

function c(e) {
    let {
        formField: a
    } = e;
    return (0, n.jsx)(s._H, {
        title: a.label,
        children: (0, n.jsx)(i, {
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
            value: a.response,
            onChange: r,
            autofocus: t,
            placeholder: o.intl.string(o.t["Sqn+Wh"])
        })
    })
}