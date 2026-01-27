/** Chunk was on 77870 **/
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
    p = n(680949),
    h = n(319610),
    f = n(786515),
    g = n(878559);

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
        enableViewerClipping: _
    } = o.A.useExperiment({
        location: "VoiceEffectsActionBar"
    }, {
        autoTrackExposure: !1
    }), O = (0, s.A)(u.A);
    if (null == t || null != A) return null;
    let j = _ && O,
        v = y && n;
    return j || v ? (0, r.jsxs)(i.f5, {
        value: b,
        children: [(0, r.jsxs)("div", {
            className: g.w,
            children: [j && (0, r.jsx)(d.A, {
                channel: t
            }), v && (0, r.jsx)(p.A, {}), v && (0, r.jsx)(h.A, {
                channel: t
            }), v && (0, r.jsx)(f.A, {})]
        }), m && (0, r.jsx)("div", {
            className: g.y
        })]
    }) : null
}