/** chunk id: 123393, original params: e,t,n (module,exports,require) **/
n.d(t, {
    W: () => h
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(956793),
    o = n(734057),
    c = n(624458),
    u = n(513461),
    d = n(985018);

function h(e, t, h, p) {
    let [f, m] = r.useState(!1), g = (0, i.bG)([o.A], () => o.A.getChannel(p)), A = r.useCallback(() => {
        (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRX), a.ToastType.FAILURE))
    }, []), b = r.useCallback(async () => {
        if (!f && null != e && null != t && null != h) {
            if (null != g) return void s.default.selectPrivateChannel(g.id);
            if (!f) {
                m(!0);
                try {
                    await c.A.createOrEnterJoinRequestInterview(h)
                } catch (e) {
                    A()
                } finally {
                    m(!1)
                }
            }
        }
    }, [e, h, g, A, f, t]);
    return {
        approveRequest: async () => {
            if (!f && null != e && null != t && null != h) {
                m(!0);
                try {
                    await c.A.updateGuildJoinRequest(e, t, h, u.B5.APPROVED)
                } catch (e) {
                    A()
                } finally {
                    m(!1)
                }
            }
        },
        rejectRequest: () => {
            null != e && null != t && null != h && (0, a.mMO)(async () => {
                let {
                    default: r
                } = await n.e("70685").then(n.bind(n, 867276));
                return n => (0, l.jsx)(r, {
                    modalProps: n,
                    guildId: e,
                    userId: t,
                    guildJoinRequestId: h,
                    onError: A
                })
            })
        },
        submitting: f,
        handleOpenInterview: b
    }
}