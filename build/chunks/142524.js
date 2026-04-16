/** chunk id: 142524 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(80682),
    u = n(643501),
    d = n(616356),
    c = n(961350),
    h = n(71393),
    g = n(576705),
    m = n(290863),
    f = n(977997),
    A = n(954571),
    I = n(279250),
    E = n(834757),
    p = n(727353),
    _ = n(652215),
    S = n(378219);
class x extends l.PureComponent {
    componentDidMount() {
        let {
            user: e,
            streamApplication: t
        } = this.props;
        A.default.track(_.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        })
    }
    render() {
        let {
            activity: e,
            user: t,
            stream: n,
            previewIsOpen: l,
            onAction: r,
            hideTip: a,
            onWatch: o,
            activeStream: u,
            currentUserId: d,
            canWatch: c,
            unavailableReason: h,
            streamApplication: g
        } = this.props;
        return null == n ? null : (0, i.jsx)("div", {
            className: s()(S.yt, {
                [S.P0]: l
            }),
            children: (0, i.jsx)(p.Z, {
                stream: n,
                activeStream: u,
                streamActivity: e,
                streamApplication: g,
                user: t,
                currentUserId: d,
                canWatch: c ?? !1,
                unavailableReason: h,
                onWatchStream: o,
                onAction: r,
                hideTip: a
            })
        })
    }
}

function T(e) {
    let {
        user: t,
        channel: n,
        ...r
    } = e, [s, A] = (0, a.yK)([f.A, h.A, g.A, u.default], () => (0, I.eo)(n, f.A, h.A, g.A, u.default)), p = (0, a.bG)([d.A], () => d.A.getStreamForUser(t.id, n.getGuildId())), _ = (0, a.bG)([d.A], () => d.A.getActiveStreamForApplicationStream(p)), S = (0, a.bG)([c.default], () => c.default.getId()), T = (0, E.AO)(p), N = (0, a.bG)([m.A], () => (0, E.nr)(p, m.A)), C = l.useMemo(() => ({
        [n.guild_id]: [t.id]
    }), [n.guild_id, t.id]);
    return (0, o.Eq)(C, "StreamPreviewPopout"), (0, i.jsx)(x, {
        ...r,
        canWatch: s,
        unavailableReason: A,
        user: t,
        streamApplication: T,
        stream: p,
        activeStream: _,
        currentUserId: S,
        activity: N,
        channel: n
    })
}