/** chunk id: 502103 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    a = n(554146),
    r = n(397927),
    s = n(15073),
    o = n(5180),
    d = n(954571),
    c = n(488926),
    u = n(45780),
    A = n(652215),
    h = n(49999),
    _ = n(124759);

function m(e) {
    let t = (0, s.TZ)(e),
        m = _.dR.some(t => !(0, o.ai)(e?.id) && c.Ib(t, e)),
        p = e?.defaultMessageNotifications === A.orn.ALL_MESSAGES,
        g = (0, u.G$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? A.dJq),
        E = t && (m || p) && !g,
        I = l.useCallback(() => {
            (0, u._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? A.dJq, !0, h.i.DISMISS)
        }, [e]),
        f = l.useRef(!1);
    l.useEffect(() => {
        E && !f.current && ((0, r.mMO)(async () => {
            let {
                default: t
            } = await n.e("42446").then(n.bind(n, 653981));
            return n => (0, i.jsx)(t, {
                guild: e,
                canEveryoneModerate: m,
                isDefaultNotificationsAllMessages: p,
                ...n
            })
        }, {
            onCloseCallback: I
        }), d.default.track(A.HAw.DISMISSIBLE_CONTENT_SHOWN, {
            type: a.V[a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
            guild_id: e?.id ?? A.dJq
        }), f.current = !0)
    }, [m, e, I, p, E])
}