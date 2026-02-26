/** chunk id: 578746, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => o
});
var i = n(627968);
n(64700);
var a = n(435371),
    r = n(397927);

function l(e) {
    let {
        value: t,
        onChange: n,
        note: a,
        title: l,
        disabled: _
    } = e;
    return (0, i.jsx)(r.dOG, {
        checked: t,
        onChange: n,
        disabled: _,
        label: l,
        description: a
    })
}

function _(e) {
    let {
        tooltipText: t,
        ...n
    } = e;
    return (0, i.jsx)(a.m_, {
        text: t,
        asContainer: !0,
        align: "right",
        caretConfig: {
            position: "bottom",
            align: "end"
        },
        children: (0, i.jsx)(l, {
            ...n
        })
    })
}

function o(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, i.jsx)(_, {
        ...e
    }) : (0, i.jsx)(l, {
        ...e
    })
}