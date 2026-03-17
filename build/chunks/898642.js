/** chunk id: 898642 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(827734),
    l = n(397927),
    s = n(189252),
    o = n(287809),
    d = n(954571),
    c = n(975571),
    u = n(427262),
    A = n(652215),
    h = n(985018);

function _(e) {
    let {
        focusSectionProps: t
    } = e, n = (0, a.bG)([o.default], () => o.default.getCurrentUser()), _ = (0, u.mv)(n);
    return (0, i.jsx)(l.MzZ, {
        href: c.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(s.A, {
            color: _ ? r.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            onClick: () => d.default.track(A.HAw.HELP_CLICKED, {
                highlighted: _
            }),
            icon: l.cBN,
            tooltip: h.intl.string(h.t["cqEoj/"]),
            ...t
        })
    })
}