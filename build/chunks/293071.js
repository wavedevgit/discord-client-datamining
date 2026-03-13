/** chunk id: 293071 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => d
});
var i = n(627968);
n(64700);
var s = n(215530),
    r = n(976270),
    l = n(916217),
    a = n(417021),
    o = n(239606);

function d(e) {
    let {
        hideRestrictedProfile: t,
        ...n
    } = e, {
        user: d
    } = n, [c, u] = (0, s.A)(d.id);
    return c && !t ? (0, i.jsx)(a.A, {
        onHide: u,
        ...n
    }) : d.isNonUserBot() ? (0, i.jsx)(l.A, {
        ...n
    }) : d.bot ? (0, i.jsx)(r.A, {
        ...n
    }) : (0, i.jsx)(o.A, {
        ...n
    })
}