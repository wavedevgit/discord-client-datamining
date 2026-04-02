/** chunk id: 293071 params = (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => o
});
var i = t(627968);
t(64700);
var l = t(215530),
    a = t(976270),
    s = t(916217),
    r = t(417021),
    d = t(239606);

function o(e) {
    let {
        hideRestrictedProfile: n,
        ...t
    } = e, {
        user: o
    } = t, [c, u] = (0, l.A)(o.id);
    return c && !n ? (0, i.jsx)(r.A, {
        onHide: u,
        ...t
    }) : o.isNonUserBot() ? (0, i.jsx)(s.A, {
        ...t
    }) : o.bot ? (0, i.jsx)(a.A, {
        ...t
    }) : (0, i.jsx)(d.A, {
        ...t
    })
}