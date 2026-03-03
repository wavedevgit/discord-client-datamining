/** chunk id: 404192, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(397927),
    s = n(975807),
    o = n(985018),
    d = n(212335),
    c = n(606566);
let u = e => {
    let {
        data: {
            url: t,
            link_text: n,
            link_description: a,
            is_localized: o
        }
    } = e;
    return o ? (0, l.jsxs)(r.DUT, {
        role: "link",
        className: i()(c.$J, d.lD),
        onClick: () => {
            (0, s.A)(t)
        },
        children: [(0, l.jsxs)("div", {
            className: c.xU,
            children: [(0, l.jsx)(r.Text, {
                className: c.__invalid_linkText,
                variant: "text-md/semibold",
                children: n
            }), null != a && "" !== a && (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: a
            })]
        }), (0, l.jsx)(r.I9m, {
            size: "sm",
            color: "currentColor",
            className: c.wP
        })]
    }) : null
};

function _(e) {
    let {
        elements: t
    } = e;
    if (null == t || 0 === t.length || null == t.find(e => {
            let {
                data: t
            } = e;
            return t.is_localized
        })) return null;
    let n = t.map((e, t) => {
            let {
                data: n
            } = e;
            return (0, l.jsx)(u, {
                data: n
            }, `external-link+${t}`)
        }),
        a = t.some(e => {
            let {
                data: t
            } = e;
            return t.is_header_hidden
        });
    return (0, l.jsxs)("div", {
        className: i()(c.nV, d.E8),
        children: [!a && (0, l.jsx)(r.Heading, {
            variant: "heading-sm/semibold",
            color: "text-default",
            className: c.wx,
            children: o.intl.string(o.t.hvVgAZ)
        }), n]
    })
}