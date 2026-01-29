/** Chunk was on 1113 **/
/** chunk id: 874739, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
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
    h = n(203982),
    p = n(484191),
    g = n(665450),
    f = n(526369),
    m = n(699707),
    b = n(713397),
    A = n(652215),
    y = n(806931),
    O = n(403264);
let _ = (0, s.A)(e => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: _,
        layout: x,
        onSelectParticipant: j,
        onContextMenuParticipant: v,
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
        popoutType: L,
        awaitingRemoteSessionInfo: M,
        callContainerDimensions: k
    } = e;
    l.useEffect(() => {
        h._.dispatch(A.jej.REMEASURE_TARGET)
    }, [P, w, k.width, k.height]);
    let G = l.useMemo(() => n.filter(e => e.type !== y.lp.ACTIVITY || !e.participants.some(e => (0, a.S)(e))), [n, _]),
        U = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(C.id), [C.id]);
    if ((null == M ? void 0 : M.channelId) === C.id) return (0, r.jsx)(g.A, {
        height: w
    });
    if ((null == C ? void 0 : C.isGuildVocalOrThread()) && !N) return (0, r.jsx)(p.A, {
        channel: C,
        participants: t,
        hasConnectPermission: S
    });
    if (n = N ? n : t, x === A.DUB.HAVEN) return (0, r.jsx)(d.A, {
        participants: n,
        channel: C,
        idle: R
    });
    if (D === A._Of.VOICE) return (0, r.jsx)(c.A, {
        guildId: C.guild_id,
        width: P,
        className: O.Er,
        participants: t,
        onContextMenu: v
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
            className: O.HA,
            justify: u.A.Justify.CENTER,
            align: u.A.Align.CENTER,
            children: (0, r.jsx)(f.A, {
                channel: C,
                className: O.g9,
                participants: G,
                totalNumberOfParticipants: t.length,
                onClick: j,
                onDoubleClick: E,
                onContextMenu: v,
                inCall: N,
                popoutType: L
            })
        })
    }
    return (0, r.jsx)(m.A, {
        onFullscreenParticipant: E,
        onContextMenuParticipant: v,
        onSelectParticipant: j,
        selectedParticipant: s,
        filteredParticipants: G,
        participants: t,
        popoutType: L,
        className: I,
        idle: R,
        height: w,
        width: P,
        layout: x,
        inCall: N,
        channel: C,
        showParticipants: T
    })
})