/** chunk id: 142524 params = (module,exports,require) **/
i.d(e, {
    A: () => x
});
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(311907),
    o = i(80682),
    d = i(643501),
    u = i(616356),
    c = i(961350),
    m = i(71393),
    A = i(576705),
    p = i(290863),
    h = i(977997),
    g = i(954571),
    f = i(279250),
    T = i(834757),
    v = i(727353),
    C = i(652215),
    S = i(633800);
class E extends l.PureComponent {
    componentDidMount() {
        let {
            user: t,
            streamApplication: e
        } = this.props;
        g.default.track(C.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: t.id,
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null,
            is_streaming: !0
        })
    }
    render() {
        let {
            activity: t,
            user: e,
            stream: i,
            previewIsOpen: l,
            onAction: r,
            hideTip: a,
            onWatch: o,
            activeStream: d,
            currentUserId: u,
            canWatch: c,
            unavailableReason: m,
            streamApplication: A
        } = this.props;
        return null == i ? null : (0, n.jsx)("div", {
            className: s()(S.yt, {
                [S.P0]: l
            }),
            children: (0, n.jsx)(v.Z, {
                stream: i,
                activeStream: d,
                streamActivity: t,
                streamApplication: A,
                user: e,
                currentUserId: u,
                canWatch: c ?? !1,
                unavailableReason: m,
                onWatchStream: o,
                onAction: r,
                hideTip: a
            })
        })
    }
}

function x(t) {
    let {
        user: e,
        channel: i,
        ...r
    } = t, [s, g] = (0, a.yK)([h.A, m.A, A.A, d.default], () => (0, f.eo)(i, h.A, m.A, A.A, d.default)), v = (0, a.bG)([u.A], () => u.A.getStreamForUser(e.id, i.getGuildId())), C = (0, a.bG)([u.A], () => u.A.getActiveStreamForApplicationStream(v)), S = (0, a.bG)([c.default], () => c.default.getId()), x = (0, T.AO)(v), y = (0, a.bG)([p.A], () => (0, T.nr)(v, p.A)), _ = l.useMemo(() => ({
        [i.guild_id]: [e.id]
    }), [i.guild_id, e.id]);
    return (0, o.Eq)(_, "StreamPreviewPopout"), (0, n.jsx)(E, {
        ...r,
        canWatch: s,
        unavailableReason: g,
        user: e,
        streamApplication: x,
        stream: v,
        activeStream: C,
        currentUserId: S,
        activity: y,
        channel: i
    })
}