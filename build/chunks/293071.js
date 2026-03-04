/** chunk id: 293071, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => o
});
var i = n(627968);
n(64700);
var s = n(215530),
    l = n(976270),
    r = n(916217),
    a = n(417021),
    d = n(239606);

function o(e) {
    let {
        hideRestrictedProfile: t,
        ...n
    } = e, {
        user: o
    } = n, [c, u] = (0, s.A)(o.id);
    return c && !t ? (0, i.jsx)(a.A, {
        onHide: u,
        ...n
    }) : o.isNonUserBot() ? (0, i.jsx)(r.A, {
        ...n
    }) : o.bot ? (0, i.jsx)(l.A, {
        ...n
    }) : (0, i.jsx)(d.A, {
        ...n
    })
}