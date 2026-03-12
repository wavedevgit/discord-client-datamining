/** chunk id: 874739 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(456412),
    a = n(878549),
    o = n(313961),
    c = n(493387),
    d = n(235986),
    u = n(808124),
    h = n(203982),
    A = n(484191),
    m = n(665450),
    p = n(526369),
    g = n(699707),
    _ = n(713397),
    f = n(652215),
    x = n(806931),
    C = n(691453);
let E = (0, r.A)(e => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: r,
        participantsVersion: E,
        layout: I,
        onSelectParticipant: N,
        onContextMenuParticipant: b,
        onFullscreenParticipant: S,
        channel: T,
        hasConnectPermission: v,
        className: y,
        inCall: j,
        showParticipants: R = !0,
        width: O,
        height: L,
        idle: M,
        mode: D,
        popoutType: G,
        awaitingRemoteSessionInfo: U,
        callContainerDimensions: P
    } = e;
    s.useEffect(() => {
        h._.dispatch(f.jej.REMEASURE_TARGET)
    }, [O, L, P.width, P.height]);
    let w = s.useMemo(() => n.filter(e => e.type !== x.lp.ACTIVITY || !e.participants.some(e => (0, a.S)(e))), [n, E]),
        k = (0, l.bG)([o.A], () => o.A.getVoiceParticipantsHidden(T.id), [T.id]);
    if (U?.channelId === T.id) return (0, i.jsx)(m.A, {
        height: L
    });
    if (T?.isGuildVocalOrThread() && !j) return (0, i.jsx)(A.A, {
        channel: T,
        participants: t,
        hasConnectPermission: v
    });
    if (n = j ? n : t, I === f.DUB.HAVEN) return (0, i.jsx)(u.A, {
        participants: n,
        channel: T,
        idle: M
    });
    if (D === f._Of.VOICE) return (0, i.jsx)(c.A, {
        guildId: T.guild_id,
        width: O,
        className: C.Er,
        participants: t,
        onContextMenu: b
    });
    if (null == r) {
        if (0 === n.length) {
            let e = t.length > 0 && !k;
            return (0, i.jsx)(_.A, {
                channelId: T.id,
                allPoppedOut: e
            })
        }
        return (0, i.jsx)(d.A, {
            className: C.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(p.A, {
                channel: T,
                className: C.g9,
                participants: w,
                totalNumberOfParticipants: t.length,
                onClick: N,
                onDoubleClick: S,
                onContextMenu: b,
                inCall: j,
                popoutType: G
            })
        })
    }
    return (0, i.jsx)(g.A, {
        onFullscreenParticipant: S,
        onContextMenuParticipant: b,
        onSelectParticipant: N,
        selectedParticipant: r,
        filteredParticipants: w,
        participants: t,
        popoutType: G,
        className: y,
        idle: M,
        height: L,
        width: O,
        layout: I,
        inCall: j,
        channel: T,
        showParticipants: R
    })
})