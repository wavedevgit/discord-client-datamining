/** chunk id: 123393 params = (module,exports,require) **/
n.d(t, {
    W: () => h
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(956793),
    o = n(734057),
    c = n(624458),
    d = n(513461),
    u = n(985018);

function h(e, t, h, m) {
    let [A, g] = l.useState(!1), p = (0, a.bG)([o.A], () => o.A.getChannel(m)), _ = l.useCallback(() => {
        (0, s.showToast)((0, s.createToast)(u.intl.string(u.t.R0RpRX), s.ToastType.FAILURE))
    }, []), f = l.useCallback(async () => {
        if (!A && null != e && null != t && null != h) {
            if (null != p) return void r.default.selectPrivateChannel(p.id);
            g(!0);
            try {
                await c.A.createOrEnterJoinRequestInterview(h)
            } catch {
                _()
            } finally {
                g(!1)
            }
        }
    }, [e, h, p, _, A, t]);
    return {
        approveRequest: async () => {
            if (!A && null != e && null != t && null != h) {
                g(!0);
                try {
                    await c.A.updateGuildJoinRequest(e, t, h, d.B5.APPROVED)
                } catch {
                    _()
                } finally {
                    g(!1)
                }
            }
        },
        rejectRequest: () => {
            null != e && null != t && null != h && (0, s.mMO)(async () => {
                let {
                    default: l
                } = await n.e("70685").then(n.bind(n, 867276));
                return n => (0, i.jsx)(l, {
                    modalProps: n,
                    guildId: e,
                    userId: t,
                    guildJoinRequestId: h,
                    onError: _
                })
            })
        },
        submitting: A,
        handleOpenInterview: f
    }
}