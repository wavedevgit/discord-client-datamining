/** chunk id: 898642, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(827734),
    a = n(397927),
    s = n(773669),
    o = n(287809),
    d = n(954571),
    c = n(975571),
    u = n(427262),
    A = n(58736),
    h = n(652215),
    _ = n(985018);
let m = new Set(["ko", "ja"]);

function p(e) {
    let {
        className: t,
        focusSectionProps: n
    } = e, p = (0, r.bG)([o.default], () => o.default.getCurrentUser()), g = (0, r.bG)([s.default], () => s.default.locale), E = (0, u.mv)(p);
    return (0, i.jsx)(a.MzZ, {
        href: c.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(A.In, {
            color: E ? l.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            className: t,
            onClick: () => d.default.track(h.HAw.HELP_CLICKED, {
                highlighted: E
            }),
            icon: a.cBN,
            tooltipPosition: m.has(g) ? "left" : void 0,
            tooltip: _.intl.string(_.t["cqEoj/"]),
            ...n
        })
    })
}