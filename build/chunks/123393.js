/** chunk id: 123393, original params: e,t,n (module,exports,require) **/
n.d(t, {
    W: () => h
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(956793),
    o = n(734057),
    c = n(624458),
    u = n(513461),
    d = n(985018);

function h(e, t, h, p) {
    let [g, f] = l.useState(!1), m = (0, i.bG)([o.A], () => o.A.getChannel(p)), b = l.useCallback(() => {
        (0, s.showToast)((0, s.createToast)(d.intl.string(d.t.R0RpRX), s.ToastType.FAILURE))
    }, []), A = l.useCallback(async () => {
        if (!g && null != e && null != t && null != h) {
            if (null != m) return void a.default.selectPrivateChannel(m.id);
            if (!g) {
                f(!0);
                try {
                    await c.A.createOrEnterJoinRequestInterview(h)
                } catch (e) {
                    b()
                } finally {
                    f(!1)
                }
            }
        }
    }, [e, h, m, b, g, t]);
    return {
        approveRequest: async () => {
            if (!g && null != e && null != t && null != h) {
                f(!0);
                try {
                    await c.A.updateGuildJoinRequest(e, t, h, u.B5.APPROVED)
                } catch (e) {
                    b()
                } finally {
                    f(!1)
                }
            }
        },
        rejectRequest: () => {
            null != e && null != t && null != h && (0, s.mMO)(async () => {
                let {
                    default: l
                } = await n.e("70685").then(n.bind(n, 867276));
                return n => (0, r.jsx)(l, {
                    modalProps: n,
                    guildId: e,
                    userId: t,
                    guildJoinRequestId: h,
                    onError: b
                })
            })
        },
        submitting: g,
        handleOpenInterview: A
    }
}