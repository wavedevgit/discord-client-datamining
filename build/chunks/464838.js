/** chunk id: 464838 params = (module,exports,require) **/
n.d(e, {
    A: () => A
});
var i = n(627968);
n(64700);
var r = n(492917),
    s = n(397927),
    a = n(311907),
    l = n(287809),
    o = n(427262),
    c = n(665909),
    d = n(237170),
    E = n(12105),
    u = n(985018),
    _ = n(230780);

function A(t) {
    let {
        senderId: e,
        trackAnalyticsEvent: n,
        onNavigate: A
    } = t, h = (0, a.bG)([l.default], () => {
        let t = l.default.getUser(e);
        return o.Ay.getName(t)
    });
    return (0, i.jsx)(E.A, {
        header: u.intl.string(u.t.sSMgC6),
        description: u.intl.formatToPlainString(u.t.q2QrTY, {
            username: h
        }),
        heroImage: (0, i.jsx)(r.$wK, {
            alt: u.intl.string(u.t["3QhxXJ"])
        }),
        children: (0, i.jsxs)("div", {
            className: _.UD,
            children: [(0, i.jsx)(s.Button, {
                text: u.intl.string(u.t["+o4Q7e"]),
                variant: "primary",
                fullWidth: !0,
                onClick: () => {
                    A(d.G.TAKE_ACTION), n(c.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION)
                }
            }), (0, i.jsx)(s.Button, {
                text: u.intl.string(u.t.xLkGzP),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => {
                    A(d.G.SAFETY_TIPS), n(c.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS)
                }
            })]
        })
    })
}