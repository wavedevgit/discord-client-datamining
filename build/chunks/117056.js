/** chunk id: 117056, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968),
    a = n(64700),
    i = n(314116),
    r = n(58149),
    s = n(997509),
    d = n(632738),
    o = n(71393),
    u = n(652215),
    c = n(985018);
let _ = e => {
    let {
        guildId: t,
        reportId: n
    } = e, [_, m] = a.useState(!1), x = o.A.getGuild(t), p = null != x;
    a.useEffect(() => {
        m(!p)
    }, [p]);
    let g = a.useCallback(() => {
        m(!0), r.Ay.trackWithMetadata(u.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
            guild_id: t,
            report_id: n
        }), s.A.leaveGuild(t)
    }, [t, n]);
    return null == x ? null : (0, l.jsx)(d.PQ, {
        title: c.intl.string(c.t.cU96ip),
        description: c.intl.formatToPlainString(c.t["26mR6/"], {
            guildName: x?.name
        }),
        buttonText: _ ? c.intl.string(c.t["9Ak99h"]) : c.intl.string(c.t.F3qExp),
        buttonDisabled: _,
        buttonVariant: "critical-primary",
        onButtonPress: () => {
            (0, i.A)({
                title: c.intl.formatToPlainString(c.t["1GX6P/"], {
                    name: x.name
                }),
                subtitle: c.intl.format(c.t.ZEXC0r, {
                    name: x.name
                }),
                confirmText: c.intl.string(c.t.J2TBi3),
                onConfirm: g
            })
        }
    })
}