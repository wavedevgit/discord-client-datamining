/** chunk id: 908675 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    d = n(46054),
    o = n(957565),
    c = n(985018),
    u = n(996004);

function _(e) {
    let {
        element: {
            data: {
                title: t,
                body: n,
                sms: i,
                is_localized: _
            }
        }
    } = e, [m, p] = l.useState(!1), h = l.useRef(d.A.reactParserFor(d.A.defaultRules));
    return _ ? (0, a.jsxs)("div", {
        className: u.kL,
        children: [(0, a.jsx)(s.Heading, {
            variant: "heading-sm/semibold",
            color: "text-default",
            className: u.wx,
            children: t
        }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            className: u.G3,
            children: h.current(n)
        }), (0, a.jsx)("div", {
            children: (0, a.jsxs)("div", {
                className: r()(u.GH, {
                    [u.pG]: m
                }),
                children: [(0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    selectable: !0,
                    className: u.Kk,
                    children: i
                }), (0, a.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: u.__invalid_trailingButton,
                    children: (0, a.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? c.intl.string(c.t.t5VZ88) : c.intl.string(c.t.OpuAlK),
                        onClick: () => {
                            (0, o.C)(i, () => p(!0))
                        }
                    })
                })]
            })
        })]
    }) : null
}