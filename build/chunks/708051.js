/** Chunk was on 43600 **/
/** chunk id: 708051, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => x,
    p: () => y
}), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(821418),
    r = n(665260),
    a = n(311907),
    o = n(421380),
    u = n(397927),
    d = n(416052),
    c = n(967198),
    g = n(351906),
    h = n(954571),
    p = n(735547),
    v = n(299827),
    A = n(172799),
    I = n(652215),
    m = n(985018),
    S = n(912579);
let x = a.Ay.connectStores([g.A], () => ({
        hideValue: g.A.hideInstantInvites
    }))(e => {
        let {
            value: t,
            autoFocus: n,
            hideValue: i,
            onCopy: s,
            disabled: r
        } = e;
        return (0, l.jsx)(d.A, {
            value: t,
            hideMessage: i ? m.intl.string(m.t["6HzNgZ"]) : null,
            buttonColor: o.$n.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: r
        })
    }),
    y = e => {
        let {
            guild: t,
            noInvitesAvailable: n,
            showFriends: a,
            onClose: o,
            modalState: d,
            isApplicationBypassToggleEnabled: g,
            setInviteFlags: y,
            copyValue: f,
            changePage: E,
            inviteChannel: _,
            source: b,
            code: C,
            guildScheduledEvent: T,
            disabled: N,
            application: M
        } = e, {
            maxAge: O,
            maxUses: j,
            networkError: w,
            showVanityURL: R,
            flags: V
        } = d, U = i.useCallback(() => {
            h.default.track(I.HAw.COPY_INSTANT_INVITE, {
                server: c.A.getGuildId(),
                channel: null == _ ? void 0 : _.id,
                channel_type: null == _ ? void 0 : _.type,
                location: b,
                code: C,
                guild_scheduled_event_id: null == T ? void 0 : T.id,
                application_id: null == M ? void 0 : M.id
            })
        }, [null == M ? void 0 : M.id, _, b, C, T]);
        return (0, l.jsxs)(u.BJc, {
            gap: 16,
            children: [(0, l.jsx)(x, {
                value: f,
                autoFocus: a,
                onCopy: U,
                disabled: N
            }), g && (0, l.jsx)(u.dOG, {
                checked: (0, r.Lt)(V, s.Q.IS_APPLICATION_BYPASS),
                onChange: e => y((0, r.lA)(V, s.Q.IS_APPLICATION_BYPASS, e)),
                disabled: N,
                label: m.intl.string(m.t["1i1bUl"]),
                description: m.intl.string(m.t["jvd/LF"])
            }), n || R ? null : (0, l.jsxs)(u.Text, {
                variant: "text-xs/normal",
                className: S.PJ,
                children: [(0, p.Be)(O, j), " ", a ? (0, l.jsx)(u.MzZ, {
                    onClick: () => E(A.QR.SETTINGS),
                    children: m.intl.string(m.t["VNe8P/"])
                }) : null]
            }), !n && a && R ? (0, l.jsxs)(u.Text, {
                variant: "text-xs/normal",
                className: S.PJ,
                children: [m.intl.string(m.t["0M2U95"]), " "]
            }) : null, null != w ? (0, l.jsx)(v.X, {
                guild: t,
                error: w,
                onClose: o
            }) : null]
        })
    }