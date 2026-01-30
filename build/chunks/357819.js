/** Chunk was on 1113 **/
/** chunk id: 357819, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
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
    h = n(694257),
    p = n(927630),
    g = n(120017),
    f = n(779271),
    m = n(763793),
    b = n(985018),
    A = n(827303);

function y(e) {
    return e.type === u.wY.VOICE
}
let O = (0, s.A)(e => {
    var t, n;
    let s, O, {
            channel: _,
            width: j,
            onScroll: x,
            popoutType: v
        } = e,
        {
            selectedParticipantId: E,
            largeStream: C,
            chatOpen: S
        } = (0, i.cf)([a.A], () => ({
            selectedParticipantId: a.A.getSelectedParticipantId(_.id),
            largeStream: a.A.getStageStreamSize(_.id),
            chatOpen: a.A.getChatOpen(_.id)
        }), [_.id]),
        I = (0, c.uy)(_.id),
        N = (0, c.zy)(_.id, u.ip.AUDIENCE),
        T = (0, i.bG)([o.A], () => null != E ? o.A.getParticipant(_.id, E) : null),
        P = (0, c.E5)(_.id, u.ip.SPEAKER),
        w = P.filter(y),
        R = null != P.find(e => e.type === u.wY.STREAM),
        D = Math.floor((j - 32) / 102),
        L = j < 424 ? 1 : j < 624 ? 2 : j < 824 || S ? 3 : 4,
        M = {
            [u.ip.SPEAKER]: L,
            [u.ip.AUDIENCE]: D,
            [u.ip.SELECTED]: 1
        },
        G = (0, d.Uo)(_.id),
        [k, U] = (0, d.RG)(_.id, M, G),
        V = [Math.max(null != (t = k[0]) ? t : 1, 1), Math.max(null != (n = k[1]) ? n : 1, 1), k[2]],
        {
            speakerTileWidth: B,
            speakerTileHeight: H
        } = (O = Math.floor((s = Math.floor(j / L - 8)) / m.i), {
            speakerTileWidth: s,
            speakerTileHeight: O
        }),
        F = C ? j - 32 : Math.min(j - 64, 3 * B + 8),
        K = e => e === k.length - 1 || 0 === N && 1 === e,
        [Y, W] = l.useState(!1),
        [z, q] = l.useState(!1);
    return (0, r.jsx)(p.A, {
        sections: V,
        renderSection: e => {
            let {
                section: t
            } = e;
            return 1 === t ? 0 === I ? null : (0, r.jsx)(f.A, {
                participantCount: I,
                label: b.intl.string(b.t.CduOkx),
                className: A.wx,
                onClick: () => W(!Y),
                collapsed: Y,
                speakers: w,
                channel: _,
                isStreamLive: R
            }, "speaker-header-".concat(t)) : 2 === t ? 0 === N ? null : (0, r.jsx)(f.A, {
                participantCount: N,
                label: b.intl.string(b.t["3foUu5"]),
                className: A.wx,
                onClick: () => q(!z),
                collapsed: z,
                channel: _
            }, "audience-header-".concat(t)) : null
        },
        sectionHeight: e => 48,
        renderRow: e => {
            let {
                section: t,
                row: n
            } = e, i = U[t][n];
            if ((null == i ? void 0 : i.length) == null) return null;
            switch (t) {
                case 0:
                    if (0 === i.length || null == i[0]) return null;
                    return (0, r.jsx)("div", {
                        className: A.Od,
                        children: (0, r.jsx)(m.A, {
                            channel: _,
                            participant: i[0],
                            width: F,
                            popoutType: v
                        })
                    }, "selected-participant");
                case 1:
                    if (Y) return null;
                    return (0, r.jsx)(l.Fragment, {
                        children: (0, r.jsx)(g.A, {
                            tileWidth: B,
                            channel: _,
                            participants: i,
                            selectedParticipant: T,
                            popoutType: v
                        })
                    }, "speakers-".concat(t, "-").concat(n));
                case 2:
                    if (z) return null;
                    return (0, r.jsx)(h.A, {
                        channel: _,
                        participants: i,
                        maxTiles: D
                    }, "audience-".concat(t, "-").concat(n));
                default:
                    return null
            }
        },
        rowHeight: e => null == U[e][0] ? 0 : 0 === e ? F / m.i + 8 : 1 === e ? Y ? 0 : H : 98 * !z,
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
        onScroll: x
    })
})