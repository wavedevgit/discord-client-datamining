/** chunk id: 967740, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => o
});
var i = l(627968);
l(64700);
var n = l(201275),
    r = l(657048),
    s = l(63104);

function o(e) {
    let {
        guildId: t,
        role: l,
        size: o,
        className: a
    } = e, d = (0, n.$7)({
        guildId: t,
        roleId: l.id,
        size: o
    });
    return null != d ? (0, i.jsx)(r.A, {
        className: a,
        ...d
    }) : (0, i.jsx)(s.A, {
        color: l.colorString,
        className: a,
        size: o
    })
}