/** chunk id: 273926 params = (module,exports,require) **/
l.d(t, {
    LK: () => m,
    Ot: () => h
});
var n = l(627968);
l(64700);
var s = l(503698),
    i = l.n(s),
    a = l(397927),
    r = l(46054),
    d = l(31457),
    o = l(985018),
    c = l(397251);

function u(e) {
    let {
        terms: t,
        channelId: l,
        className: s
    } = e;
    return (0, n.jsx)("div", {
        className: i()(c.qE, s),
        children: t.map((e, t) => (0, n.jsxs)("div", {
            className: c.gJ,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: `${t+1}.`
            }), (0, n.jsx)(a.Text, {
                variant: "text-md/normal",
                className: c.RQ,
                children: r.A.parseGuildVerificationFormRule(e, !0, {
                    channelId: l
                })
            })]
        }, `term-${t}`))
    })
}

function x(e) {
    let {
        onChange: t,
        checked: l,
        disabled: s
    } = e;
    return (0, n.jsx)("div", {
        className: c.kv,
        children: (0, n.jsx)(a.Checkbox, {
            checked: !!l,
            onChange: t,
            disabled: s,
            label: o.intl.string(o.t["2EXfGJ"])
        })
    })
}

function m(e) {
    let {
        formField: t
    } = e;
    return (0, n.jsx)(d.fu, {
        icon: a.B8Q,
        text: o.intl.string(o.t["2xbmoG"]),
        meetsRequirement: !!t.response
    })
}
let h = e => {
    let {
        channelId: t,
        formField: l,
        onChange: s
    } = e;
    return (0, n.jsxs)(d.cS, {
        title: o.intl.string(o.t["Q8OFN+"]),
        children: [(0, n.jsx)(u, {
            className: c.n_,
            terms: l.values,
            channelId: t
        }), (0, n.jsx)(x, {
            onChange: s,
            checked: l.response
        })]
    })
}