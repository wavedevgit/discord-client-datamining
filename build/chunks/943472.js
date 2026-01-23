/** Chunk was on 36133 **/
/** chunk id: 943472, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(417597),
    s = n(367513),
    a = n(401843),
    o = n(512513),
    u = n(386467),
    c = n(923917),
    d = n(574172),
    h = n(203736),
    p = n(175203),
    w = n(461782),
    f = n(734057),
    I = n(309010),
    O = n(313961),
    b = n(164617),
    y = n(567987),
    T = n(806931),
    C = n(652215),
    A = n(985018),
    P = n(732154);
let L = [o.z];

function m(e) {
    let {
        windowKey: t,
        channelId: n,
        participantId: o
    } = e, m = (0, i.bG)([f.A], () => f.A.getChannel(n)), E = (0, i.bG)([O.A], () => O.A.getParticipant(n, o), [n, o]), g = null != m && null != E, _ = (0, i.bG)([I.A], () => I.A.getVoiceChannelId() === n);
    l.useEffect(() => {
        g && _ || d.close(t)
    }, [g, _, t]);
    let U = l.useCallback(e => {
            let {
                unmountWindow: t
            } = e;
            s.A.returnParticipant(n, o), t()
        }, [n, o]),
        j = (0, y.E)({
            channel: m
        }),
        M = l.useCallback(() => {
            (0, T.Ay)(E) && (0, a.A9)(E.stream, {
                forceMultiple: !0
            })
        }, [E]),
        v = l.useMemo(() => null == E ? A.intl.string(A.t.lfzt24) : E.type === T.lp.USER ? E.user.username : E.type === T.lp.STREAM ? A.intl.formatToPlainString(A.t["/DC1y9"], {
            username: E.user.username
        }) : A.intl.string(A.t["8vlBo7"]), [E]),
        x = (0, h.A)();
    return (0, r.jsx)(c.A, {
        withTitleBar: !0,
        keybinds: L,
        windowKey: t,
        title: v,
        channelId: n,
        onBeforeUnload: U,
        appContext: C.BRT.CALL_TILE_POPOUT,
        hideModals: !0,
        children: g ? (0, r.jsx)(u.A.Provider, {
            value: m.guild_id,
            children: (0, r.jsx)(w.Ay, {
                timeout: 2e3,
                children: () => (0, r.jsx)(p.Ay, {
                    className: P.V,
                    participant: E,
                    channel: m,
                    width: x.width,
                    inCall: !0,
                    popoutType: b.N.CALL_TILE,
                    focused: !0,
                    noBorder: !0,
                    onContextMenu: j,
                    onClick: M
                })
            })
        }) : null
    })
}