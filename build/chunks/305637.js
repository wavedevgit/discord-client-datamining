/** chunk id: 305637 params = (module,exports,require) **/
i.d(e, {
    A: () => T
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(990078),
    s = i(397927),
    a = i(630054),
    o = i(956793),
    d = i(401843),
    u = i(279250),
    c = i(267102),
    p = i(616356),
    m = i(734057),
    h = i(203982),
    A = i(652215),
    g = i(985018);

function T(t) {
    let {
        isCurrentUser: e,
        applicationStream: i,
        onAction: T
    } = t, {
        activeStream: f,
        watchingOtherStream: S
    } = (0, l.cf)([p.A], () => ({
        activeStream: p.A.getActiveStreamForApplicationStream(i),
        watchingOtherStream: null != i && p.A.getAllActiveStreamsForChannel(i.channelId).filter(t => {
            let {
                ownerId: e
            } = t;
            return e !== i.ownerId
        }).length > 0
    })), E = (0, l.bG)([m.A], () => m.A.getChannel(i?.channelId)), [C, v] = (0, u.zP)(E), x = (0, c.aL)(), y = null != f && null != i && f.state !== A.XYD.ENDED && f.ownerId === i.ownerId, _ = t => {
        null != i && (T?.(), o.default.selectVoiceChannel(i.channelId), y || (0, d.Nl)(i, {
            forceMultiple: t
        }), x.dispatch(A.jej.POPOUT_CLOSE), h._.dispatch(A.jej.MODAL_CLOSE), a.A.popAll())
    };
    if (null == i) return null;
    let N = (0, u.CT)(v);
    return e ? N = g.intl.string(g.t.XvBdeT) : y && (N = g.intl.string(g.t["JH1SJ+"])), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Button, {
            size: "sm",
            variant: y ? "secondary" : "active",
            icon: s.Fzq,
            text: N,
            disabled: e || y || !C,
            onClick: () => _(!1),
            fullWidth: !0
        }), S && !y ? (0, n.jsx)(r.m, {
            text: g.intl.string(g.t.wCrzut),
            children: (0, n.jsx)(s.K0, {
                variant: "secondary",
                size: "sm",
                icon: s.vAm,
                "aria-label": g.intl.string(g.t.wCrzut),
                onClick: () => {
                    _(!0)
                }
            })
        }) : null]
    })
}