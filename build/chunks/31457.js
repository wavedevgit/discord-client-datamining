/** chunk id: 31457 params = (module,exports,require) **/
l.d(t, {
    ZK: () => x,
    _H: () => c,
    cS: () => o,
    fu: () => u
});
var n = l(627968);
l(64700);
var s = l(503698),
    i = l.n(s),
    a = l(827734),
    r = l(397927),
    d = l(72736);

function o(e) {
    let {
        title: t,
        children: l
    } = e;
    return (0, n.jsxs)("div", {
        className: d.A9,
        children: [(0, n.jsx)(r.Text, {
            className: d.HN,
            variant: "text-md/normal",
            color: "text-strong",
            children: t
        }), l]
    })
}

function c(e) {
    let {
        title: t,
        children: l
    } = e;
    return (0, n.jsxs)("div", {
        className: d.y,
        children: [(0, n.jsx)(r.Text, {
            className: d.HN,
            variant: "text-sm/medium",
            color: "text-muted",
            children: t
        }), l]
    })
}

function u(e) {
    let {
        icon: t,
        text: l,
        meetsRequirement: s
    } = e;
    return (0, n.jsxs)("div", {
        className: d.xP,
        children: [(0, n.jsx)(t, {
            className: d.jt,
            height: 16,
            width: 16,
            size: "custom",
            color: "currentColor"
        }), (0, n.jsx)(r.Text, {
            className: d.Pg,
            variant: "text-sm/medium",
            children: l
        }), s ? (0, n.jsx)(r.yr3, {
            size: "sm",
            color: "currentColor",
            className: d.Fl,
            secondaryColor: a.A.colors.WHITE.css
        }) : (0, n.jsx)(r.aXh, {
            size: "sm",
            color: "currentColor",
            className: d.Yk,
            secondaryColor: a.A.colors.WHITE.css
        })]
    })
}

function x(e) {
    let {
        icon: t,
        text: l,
        footnote: s,
        meetsRequirement: o,
        children: c,
        className: u
    } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
            className: i()(d.xP, u),
            children: [(0, n.jsx)(t, {
                className: d.jt,
                height: 20,
                width: 20,
                size: "custom",
                color: "currentColor"
            }), (0, n.jsx)(r.Text, {
                className: d.Pg,
                variant: "text-md/normal",
                children: l
            }), o ? (0, n.jsx)(r.yr3, {
                size: "md",
                color: "currentColor",
                className: d.Fl,
                secondaryColor: a.A.colors.WHITE.css
            }) : c]
        }), null != s && (0, n.jsx)(r.Text, {
            color: "text-default",
            className: d.xA,
            variant: "text-xs/normal",
            children: s
        })]
    })
}