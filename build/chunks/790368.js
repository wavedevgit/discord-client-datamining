/** Chunk was on 97492 **/
/** chunk id: 790368, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(990078),
    s = n(397927),
    a = n(711950),
    o = n(322387),
    c = n(912309),
    u = n(954571),
    d = n(652215),
    p = n(985018),
    h = n(824426);

function f(e) {
    let {
        closePopout: t
    } = e, n = (0, c.kX)();
    return (0, r.jsx)(i.m, {
        asContainer: !0,
        text: p.intl.string(p.t["lMR96+"]),
        children: (0, r.jsxs)(s.DUT, {
            "aria-label": "".concat(p.intl.string(p.t["lMR96+"]), ", ").concat(n),
            className: h.b,
            onClick: () => {
                u.default.track(d.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: o.e1.FRIEND_REQUESTS_BUTTON_CLICK
                }), a.A.transitionToSection(d.m3P.PENDING, {
                    explicit: !0
                }), t()
            },
            children: [(0, r.jsx)(s.$yI, {
                size: "xs",
                color: "currentColor"
            }), (0, r.jsx)(s.hVq, {
                count: n,
                color: l.A.colors.BACKGROUND_MOD_STRONG.css
            })]
        })
    })
}