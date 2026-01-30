/** chunk id: 306852, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    c = n(31728),
    u = n(164617),
    d = n(205297),
    h = n(334463),
    p = n(175203),
    g = n(652215),
    f = n(806931),
    m = n(697166),
    b = n(976092);
let A = "CameraPreviewPosition";

function y(e) {
    let {
        width: t,
        onContextMenuParticipant: n,
        height: i,
        channel: y,
        participants: O,
        onSelectParticipant: _
    } = e, [j, x] = function() {
        let [e, t] = l.useState(() => o.w.get(A, g.CUs.BOTTOM_RIGHT));
        return [e, l.useCallback(e => {
            o.w.set(A, e), t(e)
        }, [])]
    }(), v = l.useRef(null), E = null == y.getGuildId() ? 70 : 50, C = (0, a.bG)([h.A], () => h.A.pipWidth(f.R8.CAMERA_PREVIEW)), S = O.length, I = C * S + 8 * (S - 1), N = l.useMemo(() => ({
        minWidth: f.mn[f.R8.CAMERA_PREVIEW] * S + 8 * (S - 1),
        maxWidth: f.cF[f.R8.CAMERA_PREVIEW] * S + 8 * (S - 1)
    }), [S]);
    l.useLayoutEffect(() => {
        var e;
        null == (e = v.current) || e.ensureIsInPosition()
    }, [O.length]);
    let T = l.useCallback(e => {
            let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
            c.EB(t, f.R8.CAMERA_PREVIEW)
        }, [S]),
        P = l.useCallback((e, t) => {
            x(t)
        }, [x]);
    return (0, r.jsx)("div", {
        className: m.kL,
        children: (0, r.jsx)(d.S, {
            position: j,
            id: 0,
            width: I,
            ref: v,
            onMove: P,
            onResize: T,
            maxX: t,
            maxY: i,
            edgeOffsetTop: E,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: N,
            children: (0, r.jsx)("div", {
                className: m.iA,
                children: O.map(e => (0, r.jsx)(p.Ay, {
                    participant: e,
                    channel: y,
                    onContextMenu: n,
                    className: s()(m.Vs, b.a8),
                    fit: p.Yl.COVER,
                    inCall: !0,
                    popoutType: u.N.NO_POPOUT,
                    width: 160,
                    onClick: _
                }, e.id))
            })
        })
    })
}