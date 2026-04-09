/** chunk id: 306852 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(506774),
    d = n(31728),
    c = n(164617),
    u = n(205297),
    h = n(334463),
    A = n(175203),
    _ = n(652215),
    m = n(806931),
    p = n(637840),
    g = n(962294);
let f = "CameraPreviewPosition";

function x(e) {
    let {
        width: t,
        onContextMenuParticipant: n,
        height: s,
        channel: x,
        participants: E,
        onSelectParticipant: I
    } = e, [C, N] = function() {
        let [e, t] = l.useState(() => o.w.get(f, _.CUs.BOTTOM_RIGHT));
        return [e, l.useCallback(e => {
            o.w.set(f, e), t(e)
        }, [])]
    }(), T = l.useRef(null), S = null == x.getGuildId() ? 70 : 50, b = (0, r.bG)([h.A], () => h.A.pipWidth(m.R8.CAMERA_PREVIEW)), v = E.length, y = b * v + 8 * (v - 1), j = l.useMemo(() => ({
        minWidth: m.mn[m.R8.CAMERA_PREVIEW] * v + 8 * (v - 1),
        maxWidth: m.cF[m.R8.CAMERA_PREVIEW] * v + 8 * (v - 1)
    }), [v]);
    l.useLayoutEffect(() => {
        T.current?.ensureIsInPosition()
    }, [E.length]);
    let R = l.useCallback(e => {
            let t = 0 === v ? e : (e - 8 * (v - 1)) / v;
            d.EB(t, m.R8.CAMERA_PREVIEW)
        }, [v]),
        O = l.useCallback((e, t) => {
            N(t)
        }, [N]);
    return (0, i.jsx)("div", {
        className: p.kL,
        children: (0, i.jsx)(u.S, {
            position: C,
            id: 0,
            width: y,
            ref: T,
            onMove: O,
            onResize: R,
            maxX: t,
            maxY: s,
            edgeOffsetTop: S,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: j,
            children: (0, i.jsx)("div", {
                className: p.iA,
                children: E.map(e => (0, i.jsx)(A.Ay, {
                    participant: e,
                    channel: x,
                    onContextMenu: n,
                    className: a()(p.Vs, g.a8),
                    fit: A.Yl.COVER,
                    inCall: !0,
                    popoutType: c.N.NO_POPOUT,
                    width: 160,
                    onClick: I
                }, e.id))
            })
        })
    })
}