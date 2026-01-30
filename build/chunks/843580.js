/** chunk id: 843580, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(228524), n(896048);
var l = n(627968),
    i = n(64700),
    s = n(158954),
    r = n(397927),
    a = n(181658),
    c = n(946116),
    o = n(985018),
    d = n(577114);

function u(e) {
    let {
        directoryChannelId: t,
        description: n,
        onDescriptionChange: u,
        categoryId: m,
        onCategoryIdChange: x,
        onSubmit: g,
        onBack: C
    } = e, [j, h] = i.useState(!1), [p, f] = i.useState(null), b = async () => {
        h(!0);
        try {
            await g()
        } catch (e) {
            f(new a.A(e))
        }
        h(!1)
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.rQ0, {
            title: o.intl.string(o.t["5bQcoa"]),
            subtitle: o.intl.string(o.t.Ie60Wc)
        }), (0, l.jsx)(s.cwr, {
            children: (0, l.jsxs)("div", {
                className: d.S,
                children: [(0, l.jsx)(r.fs1, {
                    label: o.intl.string(o.t.FFFAGt),
                    value: n,
                    maxLength: 200,
                    placeholder: o.intl.string(o.t.VzuITC),
                    onChange: u,
                    error: null == p ? void 0 : p.getAnyErrorMessage()
                }), (0, l.jsx)(r.l6P, {
                    selectionMode: "single",
                    label: o.intl.string(o.t.Olo8FB),
                    placeholder: o.intl.string(o.t.XqMe3N),
                    options: (0, c.g2)(t),
                    value: m,
                    onSelectionChange: x,
                    maxOptionsVisible: 4
                })]
            })
        }), (0, l.jsx)(s.H7u, {
            leading: (0, l.jsx)(r.QWc, {
                size: "sm",
                variant: "secondary",
                text: o.intl.string(o.t["13/7kX"]),
                onClick: C
            }),
            actions: [{
                variant: "primary",
                text: o.intl.string(o.t.H9jxS1),
                onClick: b,
                loading: j,
                disabled: "" === n || m === c.mU.UNCATEGORIZED
            }]
        })]
    })
}