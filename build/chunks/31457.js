/** chunk id: 31457 params = (module,exports,require) **/
t.d(a, {
    ZK: () => x,
    _H: () => d,
    cS: () => c,
    fu: () => u
});
var n = t(627968);
t(64700);
var r = t(503698),
    s = t.n(r),
    l = t(827734),
    o = t(397927),
    i = t(726064);

function c(e) {
    let {
        title: a,
        children: t
    } = e;
    return (0, n.jsxs)("div", {
        className: i.A9,
        children: [(0, n.jsx)(o.Text, {
            className: i.HN,
            variant: "text-md/normal",
            color: "text-strong",
            children: a
        }), t]
    })
}

function d(e) {
    let {
        title: a,
        children: t
    } = e;
    return (0, n.jsxs)("div", {
        className: i.y,
        children: [(0, n.jsx)(o.Text, {
            className: i.HN,
            variant: "text-sm/medium",
            color: "text-muted",
            children: a
        }), t]
    })
}

function u(e) {
    let {
        icon: a,
        text: t,
        meetsRequirement: r
    } = e;
    return (0, n.jsxs)("div", {
        className: i.xP,
        children: [(0, n.jsx)(a, {
            className: i.jt,
            height: 16,
            width: 16,
            size: "custom",
            color: "currentColor"
        }), (0, n.jsx)(o.Text, {
            className: i.Pg,
            variant: "text-sm/medium",
            children: t
        }), r ? (0, n.jsx)(o.yr3, {
            size: "sm",
            color: "currentColor",
            className: i.Fl,
            secondaryColor: l.A.colors.WHITE.css
        }) : (0, n.jsx)(o.aXh, {
            size: "sm",
            color: "currentColor",
            className: i.Yk,
            secondaryColor: l.A.colors.WHITE.css
        })]
    })
}

function x(e) {
    let {
        icon: a,
        text: t,
        footnote: r,
        meetsRequirement: c,
        children: d,
        className: u
    } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
            className: s()(i.xP, u),
            children: [(0, n.jsx)(a, {
                className: i.jt,
                height: 20,
                width: 20,
                size: "custom",
                color: "currentColor"
            }), (0, n.jsx)(o.Text, {
                className: i.Pg,
                variant: "text-md/normal",
                children: t
            }), c ? (0, n.jsx)(o.yr3, {
                size: "md",
                color: "currentColor",
                className: i.Fl,
                secondaryColor: l.A.colors.WHITE.css
            }) : d]
        }), null != r && (0, n.jsx)(o.Text, {
            color: "text-default",
            className: i.xA,
            variant: "text-xs/normal",
            children: r
        })]
    })
}