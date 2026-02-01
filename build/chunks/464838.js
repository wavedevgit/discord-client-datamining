/** chunk id: 464838, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(492917),
    s = n(397927),
    a = n(311907),
    l = n(287809),
    o = n(427262),
    c = n(665909),
    d = n(237170),
    u = n(12105),
    E = n(985018),
    _ = n(286965);

function h(t) {
    let {
        senderId: e,
        trackAnalyticsEvent: n,
        onNavigate: h
    } = t, A = (0, a.bG)([l.default], () => {
        let t = l.default.getUser(e);
        return o.Ay.getName(t)
    });
    return (0, r.jsx)(u.A, {
        header: E.intl.string(E.t.sSMgC6),
        description: E.intl.formatToPlainString(E.t.q2QrTY, {
            username: A
        }),
        heroImage: (0, r.jsx)(i.$wK, {
            alt: E.intl.string(E.t["3QhxXJ"])
        }),
        children: (0, r.jsxs)("div", {
            className: _.UD,
            children: [(0, r.jsx)(s.Button, {
                text: E.intl.string(E.t["+o4Q7e"]),
                variant: "primary",
                fullWidth: !0,
                onClick: () => {
                    h(d.G.TAKE_ACTION), n(c.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION)
                }
            }), (0, r.jsx)(s.Button, {
                text: E.intl.string(E.t.xLkGzP),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => {
                    h(d.G.SAFETY_TIPS), n(c.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS)
                }
            })]
        })
    })
}