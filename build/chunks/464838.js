/** Chunk was on 18108 **/
/** chunk id: 464838, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(492917),
    s = n(397927),
    a = n(311907),
    l = n(287809),
    c = n(427262),
    o = n(665909),
    d = n(237170),
    u = n(12105),
    _ = n(985018),
    x = n(286965);

function m(t) {
    let {
        senderId: e,
        trackAnalyticsEvent: n,
        onNavigate: m
    } = t, h = (0, a.bG)([l.default], () => {
        let t = l.default.getUser(e);
        return c.Ay.getName(t)
    });
    return (0, r.jsx)(u.A, {
        header: _.intl.string(_.t.sSMgC6),
        description: _.intl.formatToPlainString(_.t.q2QrTY, {
            username: h
        }),
        heroImage: (0, r.jsx)(i.$wK, {
            alt: _.intl.string(_.t["3QhxXJ"])
        }),
        children: (0, r.jsxs)("div", {
            className: x.UD,
            children: [(0, r.jsx)(s.Button, {
                text: _.intl.string(_.t["+o4Q7e"]),
                variant: "primary",
                fullWidth: !0,
                onClick: () => {
                    m(d.G.TAKE_ACTION), n(o.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION)
                }
            }), (0, r.jsx)(s.Button, {
                text: _.intl.string(_.t.xLkGzP),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => {
                    m(d.G.SAFETY_TIPS), n(o.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS)
                }
            })]
        })
    })
}