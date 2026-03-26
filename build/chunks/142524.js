/** chunk id: 142524 params = (module,exports,require) **/
i.d(t, {
    A: () => N
});
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(311907),
    u = i(80682),
    d = i(643501),
    o = i(616356),
    A = i(961350),
    c = i(71393),
    _ = i(576705),
    E = i(290863),
    I = i(977997),
    h = i(954571),
    f = i(279250),
    p = i(834757),
    m = i(727353),
    g = i(652215),
    C = i(864667);
class L extends l.PureComponent {
    componentDidMount() {
        let {
            user: e,
            streamApplication: t
        } = this.props;
        h.default.track(g.HAw.OPEN_POPOUT, {
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
            stream: i,
            previewIsOpen: l,
            onAction: s,
            hideTip: r,
            onWatch: u,
            activeStream: d,
            currentUserId: o,
            canWatch: A,
            unavailableReason: c,
            streamApplication: _
        } = this.props;
        return null == i ? null : (0, n.jsx)("div", {
            className: a()(C.yt, {
                [C.P0]: l
            }),
            children: (0, n.jsx)(m.Z, {
                stream: i,
                activeStream: d,
                streamActivity: e,
                streamApplication: _,
                user: t,
                currentUserId: o,
                canWatch: A ?? !1,
                unavailableReason: c,
                onWatchStream: u,
                onAction: s,
                hideTip: r
            })
        })
    }
}

function N(e) {
    let {
        user: t,
        channel: i,
        ...s
    } = e, [a, h] = (0, r.yK)([I.A, c.A, _.A, d.default], () => (0, f.eo)(i, I.A, c.A, _.A, d.default)), m = (0, r.bG)([o.A], () => o.A.getStreamForUser(t.id, i.getGuildId())), g = (0, r.bG)([o.A], () => o.A.getActiveStreamForApplicationStream(m)), C = (0, r.bG)([A.default], () => A.default.getId()), N = (0, p.AO)(m), S = (0, r.bG)([E.A], () => (0, p.nr)(m, E.A)), P = l.useMemo(() => ({
        [i.guild_id]: [t.id]
    }), [i.guild_id, t.id]);
    return (0, u.Eq)(P, "StreamPreviewPopout"), (0, n.jsx)(L, {
        ...s,
        canWatch: a,
        unavailableReason: h,
        user: t,
        streamApplication: N,
        stream: m,
        activeStream: g,
        currentUserId: C,
        activity: S,
        channel: i
    })
}