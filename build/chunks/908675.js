/** Chunk was on 12236 **/
/** chunk id: 908675, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(46054),
    d = n(957565),
    c = n(985018),
    u = n(38776);

function m(e) {
    let {
        element: {
            data: {
                title: t,
                body: n,
                sms: i,
                is_localized: m
            }
        }
    } = e, [p, b] = r.useState(!1), _ = r.useRef(o.A.reactParserFor(o.A.defaultRules));
    return m ? (0, l.jsxs)("div", {
        className: u.kL,
        children: [(0, l.jsx)(s.Heading, {
            variant: "heading-sm/semibold",
            color: "text-default",
            className: u.wx,
            children: t
        }), (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            className: u.G3,
            children: _.current(n)
        }), (0, l.jsx)("div", {
            children: (0, l.jsxs)("div", {
                className: a()(u.GH, {
                    [u.pG]: p
                }),
                children: [(0, l.jsx)(s.Text, {
                    variant: "text-md/normal",
                    selectable: !0,
                    className: u.Kk,
                    children: i
                }), (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: u.__invalid_trailingButton,
                    children: (0, l.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: p ? c.intl.string(c.t.t5VZ88) : c.intl.string(c.t.OpuAlK),
                        onClick: () => {
                            (0, d.C)(i, () => b(!0))
                        }
                    })
                })]
            })
        })]
    }) : null
}