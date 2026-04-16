/** chunk id: 31457 params = (module,exports,require) **/
n.d(t, {
    ZK: () => _,
    _H: () => c,
    cS: () => d,
    fu: () => u
});
var r = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(827734),
    a = n(397927),
    o = n(72736);

function d(e) {
    let {
        title: t,
        children: n
    } = e;
    return (0, r.jsxs)("div", {
        className: o.A9,
        children: [(0, r.jsx)(a.Text, {
            className: o.HN,
            variant: "text-md/normal",
            color: "text-strong",
            children: t
        }), n]
    })
}

function c(e) {
    let {
        title: t,
        children: n
    } = e;
    return (0, r.jsxs)("div", {
        className: o.y,
        children: [(0, r.jsx)(a.Text, {
            className: o.HN,
            variant: "text-sm/medium",
            color: "text-muted",
            children: t
        }), n]
    })
}

function u(e) {
    let {
        icon: t,
        text: n,
        meetsRequirement: s
    } = e;
    return (0, r.jsxs)("div", {
        className: o.xP,
        children: [(0, r.jsx)(t, {
            className: o.jt,
            height: 16,
            width: 16,
            size: "custom",
            color: "currentColor"
        }), (0, r.jsx)(a.Text, {
            className: o.Pg,
            variant: "text-sm/medium",
            children: n
        }), s ? (0, r.jsx)(a.yr3, {
            size: "sm",
            color: "currentColor",
            className: o.Fl,
            secondaryColor: l.A.colors.WHITE.css
        }) : (0, r.jsx)(a.aXh, {
            size: "sm",
            color: "currentColor",
            className: o.Yk,
            secondaryColor: l.A.colors.WHITE.css
        })]
    })
}

function _(e) {
    let {
        icon: t,
        text: n,
        footnote: s,
        meetsRequirement: d,
        children: c,
        className: u
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: i()(o.xP, u),
            children: [(0, r.jsx)(t, {
                className: o.jt,
                height: 20,
                width: 20,
                size: "custom",
                color: "currentColor"
            }), (0, r.jsx)(a.Text, {
                className: o.Pg,
                variant: "text-md/normal",
                children: n
            }), d ? (0, r.jsx)(a.yr3, {
                size: "md",
                color: "currentColor",
                className: o.Fl,
                secondaryColor: l.A.colors.WHITE.css
            }) : c]
        }), null != s && (0, r.jsx)(a.Text, {
            color: "text-default",
            className: o.xA,
            variant: "text-xs/normal",
            children: s
        })]
    })
}