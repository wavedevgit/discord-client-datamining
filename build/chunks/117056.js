/** chunk id: 117056, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(314116),
    a = n(58149),
    s = n(997509),
    o = n(632738),
    d = n(71393),
    c = n(652215),
    u = n(985018);
let m = e => {
    let {
        guildId: t,
        reportId: n
    } = e, [m, p] = r.useState(!1), b = d.A.getGuild(t), _ = null != b;
    r.useEffect(() => {
        p(!_)
    }, [_]);
    let g = r.useCallback(() => {
        p(!0), a.Ay.trackWithMetadata(c.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
            guild_id: t,
            report_id: n
        }), s.A.leaveGuild(t)
    }, [t, n]);
    return null == b ? null : (0, l.jsx)(o.PQ, {
        title: u.intl.string(u.t.cU96ip),
        description: u.intl.formatToPlainString(u.t["26mR6/"], {
            guildName: null == b ? void 0 : b.name
        }),
        buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
        buttonDisabled: m,
        buttonVariant: "critical-primary",
        onButtonPress: () => {
            (0, i.A)({
                title: u.intl.formatToPlainString(u.t["1GX6P/"], {
                    name: b.name
                }),
                subtitle: u.intl.format(u.t.ZEXC0r, {
                    name: b.name
                }),
                confirmText: u.intl.string(u.t.J2TBi3),
                onConfirm: g
            })
        }
    })
}