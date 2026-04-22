/** chunk id: 305637 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(990078),
    a = n(397927),
    r = n(630054),
    o = n(956793),
    c = n(401843),
    d = n(279250),
    u = n(267102),
    h = n(616356),
    m = n(734057),
    A = n(203982),
    g = n(652215),
    p = n(985018);

function _(e) {
    let {
        isCurrentUser: t,
        applicationStream: n,
        onAction: _
    } = e, {
        activeStream: f,
        watchingOtherStream: E
    } = (0, l.cf)([h.A], () => ({
        activeStream: h.A.getActiveStreamForApplicationStream(n),
        watchingOtherStream: null != n && h.A.getAllActiveStreamsForChannel(n.channelId).filter(e => {
            let {
                ownerId: t
            } = e;
            return t !== n.ownerId
        }).length > 0
    })), C = (0, l.bG)([m.A], () => m.A.getChannel(n?.channelId)), [x, S] = (0, d.zP)(C), I = (0, u.aL)(), T = null != f && null != n && f.state !== g.XYD.ENDED && f.ownerId === n.ownerId, v = e => {
        null != n && (_?.(), o.default.selectVoiceChannel(n.channelId), T || (0, c.Nl)(n, {
            forceMultiple: e
        }), I.dispatch(g.jej.POPOUT_CLOSE), A._.dispatch(g.jej.MODAL_CLOSE), r.A.popAll())
    };
    if (null == n) return null;
    let N = (0, d.CT)(S);
    return t ? N = p.intl.string(p.t.XvBdeT) : T && (N = p.intl.string(p.t["JH1SJ+"])), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.Button, {
            size: "sm",
            variant: T ? "secondary" : "active",
            icon: a.Fzq,
            text: N,
            disabled: t || T || !x,
            onClick: () => v(!1),
            fullWidth: !0
        }), E && !T ? (0, i.jsx)(s.m, {
            text: p.intl.string(p.t.wCrzut),
            children: (0, i.jsx)(a.K0, {
                variant: "secondary",
                size: "sm",
                icon: a.vAm,
                "aria-label": p.intl.string(p.t.wCrzut),
                onClick: () => {
                    v(!0)
                }
            })
        }) : null]
    })
}