/** chunk id: 273926, original params: e,a,t (module,exports,require) **/
t.d(a, {
    IJ: () => u,
    LK: () => m,
    Ot: () => _,
    xs: () => x
});
var n = t(627968);
t(64700);
var r = t(503698),
    s = t.n(r),
    l = t(397927),
    o = t(46054),
    i = t(31457),
    c = t(985018),
    d = t(163562);

function u(e) {
    let {
        terms: a,
        channelId: t,
        className: r
    } = e;
    return (0, n.jsx)("div", {
        className: s()(d.qE, r),
        children: a.map((e, a) => (0, n.jsxs)("div", {
            className: d.gJ,
            children: [(0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: `${a+1}.`
            }), (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                className: d.RQ,
                children: o.A.parseGuildVerificationFormRule(e, !0, {
                    channelId: t
                })
            })]
        }, `term-${a}`))
    })
}

function x(e) {
    let {
        onChange: a,
        checked: t,
        disabled: r
    } = e;
    return (0, n.jsx)("div", {
        className: d.kv,
        children: (0, n.jsx)(l.Checkbox, {
            checked: !!t,
            onChange: a,
            disabled: r,
            label: c.intl.string(c.t["2EXfGJ"])
        })
    })
}

function m(e) {
    let {
        formField: a
    } = e;
    return (0, n.jsx)(i.fu, {
        icon: l.B8Q,
        text: c.intl.string(c.t["2xbmoG"]),
        meetsRequirement: !!a.response
    })
}
let _ = e => {
    let {
        channelId: a,
        formField: t,
        onChange: r
    } = e;
    return (0, n.jsxs)(i.cS, {
        title: c.intl.string(c.t["Q8OFN+"]),
        children: [(0, n.jsx)(u, {
            className: d.n_,
            terms: t.values,
            channelId: a
        }), (0, n.jsx)(x, {
            onChange: r,
            checked: t.response
        })]
    })
}