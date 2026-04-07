/** chunk id: 357819 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(456412),
    r = n(313961),
    o = n(63995),
    d = n(113783),
    c = n(69407),
    u = n(224648),
    h = n(694257),
    A = n(927630),
    _ = n(120017),
    m = n(779271),
    p = n(763793),
    g = n(985018),
    f = n(516950);

function x(e) {
    return e.type === c.wY.VOICE
}
let E = (0, a.A)(e => {
    let t, n, {
            channel: a,
            width: E,
            onScroll: I,
            popoutType: C
        } = e,
        {
            selectedParticipantId: N,
            largeStream: T,
            chatOpen: S
        } = (0, s.cf)([r.A], () => ({
            selectedParticipantId: r.A.getSelectedParticipantId(a.id),
            largeStream: r.A.getStageStreamSize(a.id),
            chatOpen: r.A.getChatOpen(a.id)
        }), [a.id]),
        b = (0, d.uy)(a.id),
        v = (0, d.zy)(a.id, c.ip.AUDIENCE),
        y = (0, s.bG)([o.A], () => null != N ? o.A.getParticipant(a.id, N) : null),
        j = (0, d.E5)(a.id, c.ip.SPEAKER),
        R = j.filter(x),
        O = null != j.find(e => e.type === c.wY.STREAM),
        L = Math.floor((E - 32) / 102),
        M = E < 424 ? 1 : E < 624 ? 2 : E < 824 || S ? 3 : 4,
        D = {
            [c.ip.SPEAKER]: M,
            [c.ip.AUDIENCE]: L,
            [c.ip.SELECTED]: 1
        },
        U = (0, u.Uo)(a.id),
        [G, P] = (0, u.RG)(a.id, D, U),
        k = [Math.max(G[0] ?? 1, 1), Math.max(G[1] ?? 1, 1), G[2]],
        {
            speakerTileWidth: w,
            speakerTileHeight: B
        } = (n = Math.floor((t = Math.floor(E / M - 8)) / p.i), {
            speakerTileWidth: t,
            speakerTileHeight: n
        }),
        V = T ? E - 32 : Math.min(E - 64, 3 * w + 8),
        H = e => e === G.length - 1 || 0 === v && 1 === e,
        [F, W] = l.useState(!1),
        [K, Y] = l.useState(!1);
    return (0, i.jsx)(A.A, {
        sections: k,
        renderSection: e => {
            let {
                section: t
            } = e;
            return 1 === t ? 0 === b ? null : (0, i.jsx)(m.A, {
                participantCount: b,
                label: g.intl.string(g.t.CduOkx),
                className: f.wx,
                onClick: () => W(!F),
                collapsed: F,
                speakers: R,
                channel: a,
                isStreamLive: O
            }, `speaker-header-${t}`) : 2 === t ? 0 === v ? null : (0, i.jsx)(m.A, {
                participantCount: v,
                label: g.intl.string(g.t["3foUu5"]),
                className: f.wx,
                onClick: () => Y(!K),
                collapsed: K,
                channel: a
            }, `audience-header-${t}`) : null
        },
        sectionHeight: e => 48,
        renderRow: e => {
            let {
                section: t,
                row: n
            } = e, s = P[t][n];
            if (s?.length == null) return null;
            switch (t) {
                case 0:
                    if (0 === s.length || null == s[0]) return null;
                    return (0, i.jsx)("div", {
                        className: f.Od,
                        children: (0, i.jsx)(p.A, {
                            channel: a,
                            participant: s[0],
                            width: V,
                            popoutType: C
                        })
                    }, "selected-participant");
                case 1:
                    if (F) return null;
                    return (0, i.jsx)(l.Fragment, {
                        children: (0, i.jsx)(_.A, {
                            tileWidth: w,
                            channel: a,
                            participants: s,
                            selectedParticipant: y,
                            popoutType: C
                        })
                    }, `speakers-${t}-${n}`);
                case 2:
                    if (K) return null;
                    return (0, i.jsx)(h.A, {
                        channel: a,
                        participants: s,
                        maxTiles: L
                    }, `audience-${t}-${n}`);
                default:
                    return null
            }
        },
        rowHeight: e => null == P[e][0] ? 0 : 0 === e ? V / p.i + 8 : 1 === e ? F ? 0 : B : 98 * !K,
        renderFooter: e => {
            let {
                section: t
            } = e;
            return H(t) ? (0, i.jsx)("div", {
                className: f.jH
            }, "bottom-spacer") : null
        },
        footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : 88 * !!H(e),
        className: f.XG,
        chunkSize: 60,
        onScroll: I
    })
})