/** chunk id: 601047, original params: e,t,l (module,exports,require) **/
l.d(t, {
    P1: () => o,
    PC: () => C,
    zD: () => d
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
    return (0, n.jsx)(i.fs1, {
        maxLength: a.nQ,
        value: t ?? "",
        placeholder: l ?? "",
        onChange: s,
        disabled: r,
        autoFocus: C,
        autosize: !0,
        showRemainingCharacterCount: !r
    })
}

function o(e) {
    let {
        formField: t
    } = e;
    return (0, n.jsx)(s._H, {
        title: t.label,
        children: (0, n.jsx)(C, {
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
            value: t.response,
            onChange: i,
            autofocus: l,
            placeholder: r.intl.string(r.t["Sqn+Wh"])
        })
    })
}