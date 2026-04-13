/** chunk id: 293071 params = (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => d
});
var i = t(627968);
t(64700);
var a = t(215530),
    l = t(976270),
    r = t(916217),
    o = t(417021),
    s = t(239606);

function d(e) {
    let {
        hideRestrictedProfile: n,
        ...t
    } = e, {
        user: d
    } = t, [c, _] = (0, a.A)(d.id);
    return c && !n ? (0, i.jsx)(o.A, {
        onHide: _,
        ...t
    }) : d.isNonUserBot() ? (0, i.jsx)(r.A, {
        ...t
    }) : d.bot ? (0, i.jsx)(l.A, {
        ...t
    }) : (0, i.jsx)(s.A, {
        ...t
    })
}