/** Chunk was on 1113 **/
/** chunk id: 462675, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(793574),
    i = n(688810),
    s = n(915618),
    a = n(857253),
    o = n(670470),
    c = n(502633),
    u = n(430452),
    d = n(699022),
    h = n(680949),
    p = n(319610),
    g = n(786515),
    f = n(878559);

function m(e) {
    let {
        channel: t,
        hasActiveStream: n,
        showRightDivider: m = !1
    } = e, {
        analyticsLocations: b
    } = (0, i.Ay)(l.A.VOICE_CONTROL_TRAY), A = (0, a.A)(), {
        isSharedCanvasEnabled: y
    } = c.A.useExperiment({
        guildId: null == t ? void 0 : t.guild_id,
        location: "b7309a_1"
    }), {
        enableViewerClipping: O
    } = o.A.useExperiment({
        location: "VoiceEffectsActionBar"
    }, {
        autoTrackExposure: !1
    }), _ = (0, s.A)(u.A);
    if (null == t || null != A) return null;
    let j = O && _,
        x = y && n;
    return j || x ? (0, r.jsxs)(i.f5, {
        value: b,
        children: [(0, r.jsxs)("div", {
            className: f.w,
            children: [j && (0, r.jsx)(d.A, {
                channel: t
            }), x && (0, r.jsx)(h.A, {}), x && (0, r.jsx)(p.A, {
                channel: t
            }), x && (0, r.jsx)(g.A, {})]
        }), m && (0, r.jsx)("div", {
            className: f.y
        })]
    }) : null
}