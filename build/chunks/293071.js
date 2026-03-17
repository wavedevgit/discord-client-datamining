/** chunk id: 293071 params = (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => d
});
var i = t(627968);
t(64700);
var s = t(215530),
    r = t(976270),
    l = t(916217),
    a = t(417021),
    o = t(239606);

function d(e) {
    let {
        hideRestrictedProfile: n,
        ...t
    } = e, {
        user: d
    } = t, [c, u] = (0, s.A)(d.id);
    return c && !n ? (0, i.jsx)(a.A, {
        onHide: u,
        ...t
    }) : d.isNonUserBot() ? (0, i.jsx)(l.A, {
        ...t
    }) : d.bot ? (0, i.jsx)(r.A, {
        ...t
    }) : (0, i.jsx)(o.A, {
        ...t
    })
}