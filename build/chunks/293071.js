/** chunk id: 293071 params = (module,exports,require) **/
i.r(n), i.d(n, {
    default: () => o
});
var t = i(627968);
i(64700);
var a = i(215530),
    l = i(976270),
    s = i(916217),
    r = i(417021),
    d = i(239606);

function o(e) {
    let {
        hideRestrictedProfile: n,
        ...i
    } = e, {
        user: o
    } = i, [c, u] = (0, a.A)(o.id);
    return c && !n ? (0, t.jsx)(r.A, {
        onHide: u,
        ...i
    }) : o.isNonUserBot() ? (0, t.jsx)(s.A, {
        ...i
    }) : o.bot ? (0, t.jsx)(l.A, {
        ...i
    }) : (0, t.jsx)(d.A, {
        ...i
    })
}