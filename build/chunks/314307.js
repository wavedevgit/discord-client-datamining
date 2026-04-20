/** chunk id: 314307 params = (module,exports,require) **/
n.d(t, {
    Ay: () => m,
    WK: () => d,
    cr: () => u,
    j1: () => h
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(397927),
    r = n(375901),
    o = n(652215),
    c = n(564052);

function d(e) {
    let {
        locked: t = !1,
        channelType: n
    } = e, l = n === o.rbe.GUILD_VOICE || n === o.rbe.GUILD_STAGE_VOICE ? s.oyn : t ? s.I$d : s.N$i;
    return (0, i.jsx)("div", {
        className: a()(c.qk, c.tP),
        children: (0, i.jsx)(l, {
            color: s.LU0.colors.ICON_STRONG,
            size: "custom",
            width: 42,
            height: 42
        })
    })
}

function u(e) {
    let {
        children: t,
        className: n
    } = e;
    return (0, i.jsx)(s.Heading, {
        "aria-hidden": "true",
        className: a()(n, c.wx),
        variant: "heading-xxl/extrabold",
        children: t
    })
}

function h(e) {
    let {
        children: t,
        className: n
    } = e;
    return (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "none",
        className: a()(c.h_, n),
        children: t
    })
}
let m = function(e) {
    let {
        className: t,
        channelId: n,
        children: l,
        ...s
    } = e;
    return (0, i.jsx)("div", {
        className: a()(t, c.kL),
        id: (0, r.j)(n, n),
        ...s,
        children: l
    })
}