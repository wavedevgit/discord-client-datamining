/** chunk id: 293071 params = (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => s
});
var i = t(627968);
t(64700);
var a = t(215530),
    r = t(976270),
    l = t(916217),
    o = t(417021),
    d = t(239606);

function s(e) {
    let {
        hideRestrictedProfile: n,
        ...t
    } = e, {
        user: s
    } = t, [c, _] = (0, a.A)(s.id);
    return c && !n ? (0, i.jsx)(o.A, {
        onHide: _,
        ...t
    }) : s.isNonUserBot() ? (0, i.jsx)(l.A, {
        ...t
    }) : s.bot ? (0, i.jsx)(r.A, {
        ...t
    }) : (0, i.jsx)(d.A, {
        ...t
    })
}