/** Chunk was on 41727 **/
/** chunk id: 123393, original params: e,t,n (module,exports,require) **/
n.d(t, {
    W: () => p
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

function p(e, t, p, h) {
    let [f, g] = l.useState(!1), m = (0, i.bG)([o.A], () => o.A.getChannel(h)), b = l.useCallback(() => {
        (0, s.showToast)((0, s.createToast)(d.intl.string(d.t.R0RpRX), s.ToastType.FAILURE))
    }, []), A = l.useCallback(async () => {
        if (!f && null != e && null != t && null != p) {
            if (null != m) return void a.default.selectPrivateChannel(m.id);
            if (!f) {
                g(!0);
                try {
                    await c.A.createOrEnterJoinRequestInterview(p)
                } catch (e) {
                    b()
                } finally {
                    g(!1)
                }
            }
        }
    }, [e, p, m, b, f, t]);
    return {
        approveRequest: async () => {
            if (!f && null != e && null != t && null != p) {
                g(!0);
                try {
                    await c.A.updateGuildJoinRequest(e, t, p, u.B5.APPROVED)
                } catch (e) {
                    b()
                } finally {
                    g(!1)
                }
            }
        },
        rejectRequest: () => {
            null != e && null != t && null != p && (0, s.mMO)(async () => {
                let {
                    default: l
                } = await n.e("70685").then(n.bind(n, 867276));
                return n => (0, r.jsx)(l, {
                    modalProps: n,
                    guildId: e,
                    userId: t,
                    guildJoinRequestId: p,
                    onError: b
                })
            })
        },
        submitting: f,
        handleOpenInterview: A
    }
}