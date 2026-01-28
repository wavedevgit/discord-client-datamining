/** Chunk was on 78528 **/
/** chunk id: 357819, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(456412),
    a = n(313961),
    o = n(63995),
    c = n(113783),
    u = n(69407),
    d = n(224648),
    p = n(694257),
    h = n(927630),
    f = n(120017),
    g = n(779271),
    m = n(763793),
    b = n(985018),
    A = n(827303);

function y(e) {
    return e.type === u.wY.VOICE
}
let _ = (0, s.A)(e => {
    var t, n;
    let s, _, {
            channel: O,
            width: j,
            onScroll: v,
            popoutType: x
        } = e,
        {
            selectedParticipantId: E,
            largeStream: C,
            chatOpen: S
        } = (0, i.cf)([a.A], () => ({
            selectedParticipantId: a.A.getSelectedParticipantId(O.id),
            largeStream: a.A.getStageStreamSize(O.id),
            chatOpen: a.A.getChatOpen(O.id)
        }), [O.id]),
        I = (0, c.uy)(O.id),
        N = (0, c.zy)(O.id, u.ip.AUDIENCE),
        T = (0, i.bG)([o.A], () => null != E ? o.A.getParticipant(O.id, E) : null),
        P = (0, c.E5)(O.id, u.ip.SPEAKER),
        w = P.filter(y),
        R = null != P.find(e => e.type === u.wY.STREAM),
        D = Math.floor((j - 32) / 102),
        M = j < 424 ? 1 : j < 624 ? 2 : j < 824 || S ? 3 : 4,
        L = {
            [u.ip.SPEAKER]: M,
            [u.ip.AUDIENCE]: D,
            [u.ip.SELECTED]: 1
        },
        k = (0, d.Uo)(O.id),
        [U, G] = (0, d.RG)(O.id, L, k),
        B = [Math.max(null != (t = U[0]) ? t : 1, 1), Math.max(null != (n = U[1]) ? n : 1, 1), U[2]],
        {
            speakerTileWidth: V,
            speakerTileHeight: F
        } = (_ = Math.floor((s = Math.floor(j / M - 8)) / m.i), {
            speakerTileWidth: s,
            speakerTileHeight: _
        }),
        H = C ? j - 32 : Math.min(j - 64, 3 * V + 8),
        K = e => e === U.length - 1 || 0 === N && 1 === e,
        [W, z] = l.useState(!1),
        [Y, q] = l.useState(!1);
    return (0, r.jsx)(h.A, {
        sections: B,
        renderSection: e => {
            let {
                section: t
            } = e;
            return 1 === t ? 0 === I ? null : (0, r.jsx)(g.A, {
                participantCount: I,
                label: b.intl.string(b.t.CduOkx),
                className: A.wx,
                onClick: () => z(!W),
                collapsed: W,
                speakers: w,
                channel: O,
                isStreamLive: R
            }, "speaker-header-".concat(t)) : 2 === t ? 0 === N ? null : (0, r.jsx)(g.A, {
                participantCount: N,
                label: b.intl.string(b.t["3foUu5"]),
                className: A.wx,
                onClick: () => q(!Y),
                collapsed: Y,
                channel: O
            }, "audience-header-".concat(t)) : null
        },
        sectionHeight: e => 48,
        renderRow: e => {
            let {
                section: t,
                row: n
            } = e, i = G[t][n];
            if ((null == i ? void 0 : i.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === i.length || null == i[0]) return null;
                    return (0, r.jsx)("div", {
                        className: A.Od,
                        children: (0, r.jsx)(m.A, {
                            channel: O,
                            participant: i[0],
                            width: H,
                            popoutType: x
                        })
                    }, "selected-participant");
                case 1:
                    if (W) return null;
                    return (0, r.jsx)(l.Fragment, {
                        children: (0, r.jsx)(f.A, {
                            tileWidth: V,
                            channel: O,
                            participants: i,
                            selectedParticipant: T,
                            popoutType: x
                        })
                    }, "speakers-".concat(t, "-").concat(n));
                case 2:
                    if (Y) return null;
                    return (0, r.jsx)(p.A, {
                        channel: O,
                        participants: i,
                        maxTiles: D
                    }, "audience-".concat(t, "-").concat(n));
                default:
                    return null
            }
        },
        rowHeight: e => null == G[e][0] ? 0 : 0 === e ? H / m.i + 8 : 1 === e ? W ? 0 : F : 98 * !Y,
        renderFooter: e => {
            let {
                section: t
            } = e;
            return K(t) ? (0, r.jsx)("div", {
                className: A.jH
            }, "bottom-spacer") : null
        },
        footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : 88 * !!K(e),
        className: A.XG,
        chunkSize: 60,
        onScroll: v
    })
})