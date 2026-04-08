/** chunk id: 298492 params = (module,exports,require) **/
s.d(t, {
    q: () => f
});
var a = s(627968);
s(64700);
var i = s(503698),
    l = s.n(i),
    r = s(397927),
    n = s(308528),
    d = s(854627),
    c = s(779733),
    u = s(427262),
    o = s(519412),
    m = s(985018),
    x = s(798381);
let f = e => {
    let {
        recipient: t,
        isSuccess: s,
        onClose: i
    } = e, {
        avatarSrc: f,
        eventHandlers: _
    } = (0, d.A)({
        userId: t?.id,
        size: r._3J.SIZE_56
    }), h = u.Ay.getName(t), p = !s;
    return (0, a.jsxs)("div", {
        className: l()(x.nM, {
            [x.z3]: p
        }),
        children: [(0, a.jsx)(r.euF, {
            src: f,
            "aria-label": h,
            size: r._3J.SIZE_32,
            ..._
        }), (0, a.jsxs)("div", {
            className: x.Qs,
            children: [(0, a.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                className: x.QC,
                children: h
            }), p && (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-strong",
                className: x.kc,
                children: m.intl.format(o.default["Y/oMwY"], {
                    userName: h
                })
            })]
        }), s && (0, a.jsx)(r.Button, {
            variant: "secondary",
            size: "sm",
            text: m.intl.string(m.t["g33r/P"]),
            icon: r.oyn,
            onClick: () => {
                var e;
                return e = t.id, void((0, c.default)(), n.A.openPrivateChannel({
                    recipientIds: e
                }), i())
            }
        })]
    })
}