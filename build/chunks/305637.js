/** chunk id: 305637 params = (module,exports,require) **/
n.d(e, {
    A: () => f
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(990078),
    s = n(397927),
    a = n(630054),
    o = n(956793),
    u = n(401843),
    d = n(279250),
    c = n(267102),
    h = n(616356),
    A = n(734057),
    m = n(203982),
    p = n(652215),
    g = n(985018);

function f(t) {
    let {
        isCurrentUser: e,
        applicationStream: n,
        onAction: f
    } = t, {
        activeStream: E,
        watchingOtherStream: T
    } = (0, l.cf)([h.A], () => ({
        activeStream: h.A.getActiveStreamForApplicationStream(n),
        watchingOtherStream: null != n && h.A.getAllActiveStreamsForChannel(n.channelId).filter(t => {
            let {
                ownerId: e
            } = t;
            return e !== n.ownerId
        }).length > 0
    })), C = (0, l.bG)([A.A], () => A.A.getChannel(n?.channelId)), [S, _] = (0, d.zP)(C), v = (0, c.aL)(), y = null != E && null != n && E.state !== p.XYD.ENDED && E.ownerId === n.ownerId, I = t => {
        null != n && (f?.(), o.default.selectVoiceChannel(n.channelId), y || (0, u.Nl)(n, {
            forceMultiple: t
        }), v.dispatch(p.jej.POPOUT_CLOSE), m._.dispatch(p.jej.MODAL_CLOSE), a.A.popAll())
    };
    if (null == n) return null;
    let N = (0, d.CT)(_);
    return e ? N = g.intl.string(g.t.XvBdeT) : y && (N = g.intl.string(g.t["JH1SJ+"])), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.Button, {
            size: "sm",
            variant: y ? "secondary" : "active",
            icon: s.Fzq,
            text: N,
            disabled: e || y || !S,
            onClick: () => I(!1),
            fullWidth: !0
        }), T && !y ? (0, i.jsx)(r.m, {
            text: g.intl.string(g.t.wCrzut),
            children: (0, i.jsx)(s.K0, {
                variant: "secondary",
                size: "sm",
                icon: s.vAm,
                "aria-label": g.intl.string(g.t.wCrzut),
                onClick: () => {
                    I(!0)
                }
            })
        }) : null]
    })
}