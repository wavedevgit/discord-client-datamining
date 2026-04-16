/** chunk id: 293071 params = (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => o
});
var i = t(627968);
t(64700);
var a = t(215530),
    l = t(976270),
    r = t(916217),
    d = t(417021),
    s = t(239606);

function o(e) {
    let {
        hideRestrictedProfile: n,
        ...t
    } = e, {
        user: o
    } = t, [c, u] = (0, a.A)(o.id);
    return c && !n ? (0, i.jsx)(d.A, {
        onHide: u,
        ...t
    }) : o.isNonUserBot() ? (0, i.jsx)(r.A, {
        ...t
    }) : o.bot ? (0, i.jsx)(l.A, {
        ...t
    }) : (0, i.jsx)(s.A, {
        ...t
    })
}