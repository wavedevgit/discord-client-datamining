/** Chunk was on 41727 **/
/** chunk id: 874739, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(456412),
    a = n(878549),
    o = n(313961),
    c = n(493387),
    u = n(235986),
    d = n(808124),
    p = n(203982),
    h = n(484191),
    f = n(665450),
    g = n(526369),
    m = n(699707),
    b = n(713397),
    A = n(652215),
    y = n(806931),
    _ = n(403264);
let O = (0, s.A)(e => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: O,
        layout: j,
        onSelectParticipant: v,
        onContextMenuParticipant: x,
        onFullscreenParticipant: E,
        channel: C,
        hasConnectPermission: S,
        className: I,
        inCall: N,
        showParticipants: T = !0,
        width: P,
        height: w,
        idle: R,
        mode: D,
        popoutType: M,
        awaitingRemoteSessionInfo: L,
        callContainerDimensions: k
    } = e;
    l.useEffect(() => {
        p._.dispatch(A.jej.REMEASURE_TARGET)
    }, [P, w, k.width, k.height]);
    let G = l.useMemo(() => n.filter(e => e.type !== y.lp.ACTIVITY || !e.participants.some(e => (0, a.S)(e))), [n, O]),
        U = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(C.id), [C.id]);
    if ((null == L ? void 0 : L.channelId) === C.id) return (0, r.jsx)(f.A, {
        height: w
    });
    if ((null == C ? void 0 : C.isGuildVocalOrThread()) && !N) return (0, r.jsx)(h.A, {
        channel: C,
        participants: t,
        hasConnectPermission: S
    });
    if (n = N ? n : t, j === A.DUB.HAVEN) return (0, r.jsx)(d.A, {
        participants: n,
        channel: C,
        idle: R
    });
    if (D === A._Of.VOICE) return (0, r.jsx)(c.A, {
        guildId: C.guild_id,
        width: P,
        className: _.Er,
        participants: t,
        onContextMenu: x
    });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !U;
            return (0, r.jsx)(b.A, {
                channelId: C.id,
                allPoppedOut: e
            })
        }
        return (0, r.jsx)(u.A, {
            className: _.HA,
            justify: u.A.Justify.CENTER,
            align: u.A.Align.CENTER,
            children: (0, r.jsx)(g.A, {
                channel: C,
                className: _.g9,
                participants: G,
                totalNumberOfParticipants: t.length,
                onClick: v,
                onDoubleClick: E,
                onContextMenu: x,
                inCall: N,
                popoutType: M
            })
        })
    }
    return (0, r.jsx)(m.A, {
        onFullscreenParticipant: E,
        onContextMenuParticipant: x,
        onSelectParticipant: v,
        selectedParticipant: s,
        filteredParticipants: G,
        participants: t,
        popoutType: M,
        className: I,
        idle: R,
        height: w,
        width: P,
        layout: j,
        inCall: N,
        channel: C,
        showParticipants: T
    })
})