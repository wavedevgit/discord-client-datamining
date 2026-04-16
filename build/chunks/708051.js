/** chunk id: 708051 params = (module,exports,require) **/
n.d(t, {
    I: () => v,
    p: () => f
}), n(938796);
var l = n(627968),
    i = n(64700),
    a = n(821418),
    s = n(665260),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    u = n(416052),
    c = n(967198),
    g = n(351906),
    h = n(954571),
    A = n(735547),
    x = n(299827),
    p = n(172799),
    I = n(652215),
    m = n(985018),
    S = n(640852);
let v = r.Ay.connectStores([g.A], () => ({
        hideValue: g.A.hideInstantInvites
    }))(e => {
        let {
            value: t,
            autoFocus: n,
            hideValue: i,
            onCopy: a,
            disabled: s
        } = e;
        return (0, l.jsx)(u.A, {
            value: t,
            hideMessage: i ? m.intl.string(m.t["6HzNgZ"]) : null,
            buttonColor: o.$n.Colors.BRAND,
            onCopy: a,
            autoFocus: n,
            disabled: s
        })
    }),
    f = e => {
        let {
            guild: t,
            noInvitesAvailable: n,
            showFriends: r,
            onClose: o,
            modalState: u,
            isApplicationBypassToggleEnabled: g,
            setInviteFlags: f,
            copyValue: y,
            changePage: E,
            inviteChannel: _,
            source: T,
            code: C,
            guildScheduledEvent: N,
            disabled: b,
            application: M
        } = e, {
            maxAge: j,
            maxUses: G,
            networkError: R,
            showVanityURL: U,
            flags: V
        } = u, w = i.useCallback(() => {
            h.default.track(I.HAw.COPY_INSTANT_INVITE, {
                server: c.A.getGuildId(),
                channel: _?.id,
                channel_type: _?.type,
                location: T,
                code: C,
                guild_scheduled_event_id: N?.id,
                application_id: M?.id
            })
        }, [M?.id, _, T, C, N]);
        return (0, l.jsxs)(d.BJc, {
            gap: 16,
            children: [(0, l.jsx)(v, {
                value: y,
                autoFocus: r,
                onCopy: w,
                disabled: b
            }), g && (0, l.jsx)(d.dOG, {
                checked: (0, s.Lt)(V, a.Q.IS_APPLICATION_BYPASS),
                onChange: e => f((0, s.lA)(V, a.Q.IS_APPLICATION_BYPASS, e)),
                disabled: b,
                label: m.intl.string(m.t["1i1bUl"]),
                description: m.intl.string(m.t["jvd/LF"])
            }), n || U ? null : (0, l.jsxs)(d.Text, {
                variant: "text-xs/normal",
                className: S.PJ,
                children: [(0, A.Be)(j, G), " ", r ? (0, l.jsx)(d.MzZ, {
                    onClick: () => E(p.QR.SETTINGS),
                    children: m.intl.string(m.t["VNe8P/"])
                }) : null]
            }), !n && r && U ? (0, l.jsxs)(d.Text, {
                variant: "text-xs/normal",
                className: S.PJ,
                children: [m.intl.string(m.t["0M2U95"]), " "]
            }) : null, null != R ? (0, l.jsx)(x.X, {
                guild: t,
                error: R,
                onClose: o
            }) : null]
        })
    }