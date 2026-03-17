/** chunk id: 129831 params = (module,exports,require) **/
n.d(t, {
    A: () => d,
    x: () => c
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(397927),
    s = n(297413),
    o = n(828043);

function d(e) {
    let {
        user: t,
        status: n,
        isFocused: a,
        guildId: r
    } = e;
    return (0, i.jsxs)("div", {
        className: o.Ku,
        children: [(0, i.jsx)(l.euF, {
            src: t.getAvatarURL(r, 24),
            className: o.my,
            "aria-label": t.username,
            size: l._3J.SIZE_24,
            status: n,
            statusColor: a ? "currentColor" : void 0
        }), (0, i.jsx)(s.A, {
            user: t,
            hideDiscriminator: !0
        })]
    })
}

function c(e) {
    let {
        label: t
    } = e;
    return (0, i.jsxs)("div", {
        className: o.Ku,
        children: [(0, i.jsx)("div", {
            className: r()(o.my, o.L5)
        }), (0, i.jsx)("div", {
            children: t
        })]
    })
}