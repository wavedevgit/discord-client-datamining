/** Chunk was on 35894 **/
/** chunk id: 273926, original params: e,t,n (module,exports,require) **/
n.d(t, {
    IJ: () => d,
    LK: () => m,
    Ot: () => p,
    xs: () => C
}), n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    o = n(397927),
    a = n(46054),
    s = n(31457),
    c = n(985018),
    u = n(712104);

function d(e) {
    let {
        terms: t,
        channelId: n,
        className: l
    } = e;
    return (0, r.jsx)("div", {
        className: i()(u.qE, l),
        children: t.map((e, t) => (0, r.jsxs)("div", {
            className: u.gJ,
            children: [(0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: "".concat(t + 1, ".")
            }), (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: u.RQ,
                children: a.A.parseGuildVerificationFormRule(e, !0, {
                    channelId: n
                })
            })]
        }, "term-".concat(t)))
    })
}

function C(e) {
    let {
        onChange: t,
        checked: n,
        disabled: l
    } = e;
    return (0, r.jsx)("div", {
        className: u.kv,
        children: (0, r.jsx)(o.Checkbox, {
            checked: !!n,
            onChange: t,
            disabled: l,
            label: c.intl.string(c.t["2EXfGJ"])
        })
    })
}

function m(e) {
    let {
        formField: t
    } = e;
    return (0, r.jsx)(s.fu, {
        icon: o.B8Q,
        text: c.intl.string(c.t["2xbmoG"]),
        meetsRequirement: !!t.response
    })
}
let p = e => {
    let {
        channelId: t,
        formField: n,
        onChange: l
    } = e;
    return (0, r.jsxs)(s.cS, {
        title: c.intl.string(c.t["Q8OFN+"]),
        children: [(0, r.jsx)(d, {
            className: u.n_,
            terms: n.values,
            channelId: t
        }), (0, r.jsx)(C, {
            onChange: l,
            checked: n.response
        })]
    })
}