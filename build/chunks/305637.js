/** chunk id: 305637 params = (module,exports,require) **/
i.d(t, {
    A: () => g
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(990078),
    s = i(397927),
    r = i(630054),
    o = i(956793),
    c = i(401843),
    d = i(279250),
    u = i(267102),
    m = i(616356),
    _ = i(734057),
    p = i(203982),
    h = i(652215),
    A = i(985018);

function g(e) {
    let {
        isCurrentUser: t,
        applicationStream: i,
        onAction: g
    } = e, {
        activeStream: f,
        watchingOtherStream: v
    } = (0, a.cf)([m.A], () => ({
        activeStream: m.A.getActiveStreamForApplicationStream(i),
        watchingOtherStream: null != i && m.A.getAllActiveStreamsForChannel(i.channelId).filter(e => {
            let {
                ownerId: t
            } = e;
            return t !== i.ownerId
        }).length > 0
    })), S = (0, a.bG)([_.A], () => _.A.getChannel(i?.channelId)), [I, T] = (0, d.zP)(S), C = (0, u.aL)(), E = null != f && null != i && f.state !== h.XYD.ENDED && f.ownerId === i.ownerId, y = e => {
        null != i && (g?.(), o.default.selectVoiceChannel(i.channelId), E || (0, c.Nl)(i, {
            forceMultiple: e
        }), C.dispatch(h.jej.POPOUT_CLOSE), p._.dispatch(h.jej.MODAL_CLOSE), r.A.popAll())
    };
    if (null == i) return null;
    let x = (0, d.CT)(T);
    return t ? x = A.intl.string(A.t.XvBdeT) : E && (x = A.intl.string(A.t["JH1SJ+"])), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Button, {
            size: "sm",
            variant: E ? "secondary" : "active",
            icon: s.Fzq,
            text: x,
            disabled: t || E || !I,
            onClick: () => y(!1),
            fullWidth: !0
        }), v && !E ? (0, n.jsx)(l.m, {
            text: A.intl.string(A.t.wCrzut),
            children: (0, n.jsx)(s.K0, {
                variant: "secondary",
                size: "sm",
                icon: s.vAm,
                "aria-label": A.intl.string(A.t.wCrzut),
                onClick: () => {
                    y(!0)
                }
            })
        }) : null]
    })
}