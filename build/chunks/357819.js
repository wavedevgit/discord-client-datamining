/** chunk id: 357819 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(456412),
    r = n(313961),
    o = n(63995),
    c = n(113783),
    d = n(69407),
    u = n(224648),
    h = n(694257),
    A = n(927630),
    m = n(120017),
    g = n(779271),
    p = n(763793),
    _ = n(985018),
    f = n(247541);

function x(e) {
    return e.type === d.wY.VOICE
}
let C = (0, a.A)(e => {
    let t, n, {
            channel: a,
            width: C,
            onScroll: E,
            popoutType: I
        } = e,
        {
            selectedParticipantId: N,
            largeStream: b,
            chatOpen: S
        } = (0, l.cf)([r.A], () => ({
            selectedParticipantId: r.A.getSelectedParticipantId(a.id),
            largeStream: r.A.getStageStreamSize(a.id),
            chatOpen: r.A.getChatOpen(a.id)
        }), [a.id]),
        T = (0, c.uy)(a.id),
        v = (0, c.zy)(a.id, d.ip.AUDIENCE),
        y = (0, l.bG)([o.A], () => null != N ? o.A.getParticipant(a.id, N) : null),
        j = (0, c.E5)(a.id, d.ip.SPEAKER),
        R = j.filter(x),
        O = null != j.find(e => e.type === d.wY.STREAM),
        L = Math.floor((C - 32) / 102),
        M = C < 424 ? 1 : C < 624 ? 2 : C < 824 || S ? 3 : 4,
        D = {
            [d.ip.SPEAKER]: M,
            [d.ip.AUDIENCE]: L,
            [d.ip.SELECTED]: 1
        },
        G = (0, u.Uo)(a.id),
        [U, P] = (0, u.RG)(a.id, D, G),
        w = [Math.max(U[0] ?? 1, 1), Math.max(U[1] ?? 1, 1), U[2]],
        {
            speakerTileWidth: k,
            speakerTileHeight: V
        } = (n = Math.floor((t = Math.floor(C / M - 8)) / p.i), {
            speakerTileWidth: t,
            speakerTileHeight: n
        }),
        B = b ? C - 32 : Math.min(C - 64, 3 * k + 8),
        H = e => e === U.length - 1 || 0 === v && 1 === e,
        [F, K] = s.useState(!1),
        [W, Y] = s.useState(!1);
    return (0, i.jsx)(A.A, {
        sections: w,
        renderSection: e => {
            let {
                section: t
            } = e;
            return 1 === t ? 0 === T ? null : (0, i.jsx)(g.A, {
                participantCount: T,
                label: _.intl.string(_.t.CduOkx),
                className: f.wx,
                onClick: () => K(!F),
                collapsed: F,
                speakers: R,
                channel: a,
                isStreamLive: O
            }, `speaker-header-${t}`) : 2 === t ? 0 === v ? null : (0, i.jsx)(g.A, {
                participantCount: v,
                label: _.intl.string(_.t["3foUu5"]),
                className: f.wx,
                onClick: () => Y(!W),
                collapsed: W,
                channel: a
            }, `audience-header-${t}`) : null
        },
        sectionHeight: e => 48,
        renderRow: e => {
            let {
                section: t,
                row: n
            } = e, l = P[t][n];
            if (l?.length == null) return null;
            switch (t) {
                case 0:
                    if (0 === l.length || null == l[0]) return null;
                    return (0, i.jsx)("div", {
                        className: f.Od,
                        children: (0, i.jsx)(p.A, {
                            channel: a,
                            participant: l[0],
                            width: B,
                            popoutType: I
                        })
                    }, "selected-participant");
                case 1:
                    if (F) return null;
                    return (0, i.jsx)(s.Fragment, {
                        children: (0, i.jsx)(m.A, {
                            tileWidth: k,
                            channel: a,
                            participants: l,
                            selectedParticipant: y,
                            popoutType: I
                        })
                    }, `speakers-${t}-${n}`);
                case 2:
                    if (W) return null;
                    return (0, i.jsx)(h.A, {
                        channel: a,
                        participants: l,
                        maxTiles: L
                    }, `audience-${t}-${n}`);
                default:
                    return null
            }
        },
        rowHeight: e => null == P[e][0] ? 0 : 0 === e ? B / p.i + 8 : 1 === e ? F ? 0 : V : 98 * !W,
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
        onScroll: E
    })
})