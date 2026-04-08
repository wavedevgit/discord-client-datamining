/** chunk id: 708051 params = (module,exports,require) **/
n.d(t, {
    I: () => v,
    p: () => y
}), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(821418),
    a = n(665260),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    u = n(416052),
    c = n(967198),
    g = n(351906),
    h = n(954571),
    A = n(735547),
    p = n(299827),
    x = n(172799),
    I = n(652215),
    m = n(985018),
    S = n(133501);
let v = r.Ay.connectStores([g.A], () => ({
        hideValue: g.A.hideInstantInvites
    }))(e => {
        let {
            value: t,
            autoFocus: n,
            hideValue: i,
            onCopy: s,
            disabled: a
        } = e;
        return (0, l.jsx)(u.A, {
            value: t,
            hideMessage: i ? m.intl.string(m.t["6HzNgZ"]) : null,
            buttonColor: o.$n.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: a
        })
    }),
    y = e => {
        let {
            guild: t,
            noInvitesAvailable: n,
            showFriends: r,
            onClose: o,
            modalState: u,
            isApplicationBypassToggleEnabled: g,
            setInviteFlags: y,
            copyValue: E,
            changePage: T,
            inviteChannel: _,
            source: f,
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
        } = u, O = i.useCallback(() => {
            h.default.track(I.HAw.COPY_INSTANT_INVITE, {
                server: c.A.getGuildId(),
                channel: _?.id,
                channel_type: _?.type,
                location: f,
                code: C,
                guild_scheduled_event_id: N?.id,
                application_id: M?.id
            })
        }, [M?.id, _, f, C, N]);
        return (0, l.jsxs)(d.BJc, {
            gap: 16,
            children: [(0, l.jsx)(v, {
                value: E,
                autoFocus: r,
                onCopy: O,
                disabled: b
            }), g && (0, l.jsx)(d.dOG, {
                checked: (0, a.Lt)(V, s.Q.IS_APPLICATION_BYPASS),
                onChange: e => y((0, a.lA)(V, s.Q.IS_APPLICATION_BYPASS, e)),
                disabled: b,
                label: m.intl.string(m.t["1i1bUl"]),
                description: m.intl.string(m.t["jvd/LF"])
            }), n || U ? null : (0, l.jsxs)(d.Text, {
                variant: "text-xs/normal",
                className: S.PJ,
                children: [(0, A.Be)(j, G), " ", r ? (0, l.jsx)(d.MzZ, {
                    onClick: () => T(x.QR.SETTINGS),
                    children: m.intl.string(m.t["VNe8P/"])
                }) : null]
            }), !n && r && U ? (0, l.jsxs)(d.Text, {
                variant: "text-xs/normal",
                className: S.PJ,
                children: [m.intl.string(m.t["0M2U95"]), " "]
            }) : null, null != R ? (0, l.jsx)(p.X, {
                guild: t,
                error: R,
                onClose: o
            }) : null]
        })
    }