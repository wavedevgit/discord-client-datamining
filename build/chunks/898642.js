/** Chunk was on 21738 **/
/** chunk id: 898642, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(827734),
    a = n(397927),
    s = n(773669),
    o = n(287809),
    c = n(954571),
    u = n(975571),
    d = n(427262),
    p = n(58736),
    h = n(652215),
    g = n(985018);
let f = new Set(["ko", "ja"]);

function m(e) {
    let {
        className: t,
        focusSectionProps: n
    } = e, m = (0, i.bG)([o.default], () => o.default.getCurrentUser()), A = (0, i.bG)([s.default], () => s.default.locale), _ = (0, d.mv)(m);
    return (0, r.jsx)(a.MzZ, {
        href: u.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, r.jsx)(p.In, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            color: _ ? l.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            className: t,
            onClick: () => c.default.track(h.HAw.HELP_CLICKED, {
                highlighted: _
            }),
            icon: a.cBN,
            tooltipPosition: f.has(A) ? "left" : void 0,
            tooltip: g.intl.string(g.t["cqEoj/"])
        }, n))
    })
}