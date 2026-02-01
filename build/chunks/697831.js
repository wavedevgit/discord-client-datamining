/** chunk id: 697831, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(961350),
    s = n(655116),
    o = n(341335),
    c = n(286617),
    u = n(533207),
    d = n(881335),
    p = n(272984),
    h = n(985018);

function g(e, t, n) {
    let g = (0, i.bG)([s.A, a.default], () => null != t ? (0, c.A)(s.A, a.default, t, e) : void 0, [e, t]);
    if (null == g || null == e || null == t) return null;
    let m = g.isCurrentUser || g.notPlayable || g.playingSameTrack,
        f = g.isCurrentUser || g.syncingWithUser || g.syncingWithParty;
    return [(0, r.jsx)(l.Drp, {
        id: "spotify-play-".concat(e.session_id),
        action: () => (0, d.A)(g, p.Qp.USER_ACTIVITY_PLAY, n),
        label: h.intl.string(h.t.rRffNz),
        subtext: m ? (0, o.A)(g, p.Qp.USER_ACTIVITY_PLAY) : void 0,
        disabled: m
    }, "spotify-play-".concat(e.session_id)), g.canPlaySpotify ? (0, r.jsx)(l.Drp, {
        id: "spotify-sync-".concat(e.session_id),
        action: () => (0, u.A)(g, p.Qp.USER_ACTIVITY_SYNC, n),
        label: h.intl.string(h.t.eU3inB),
        subtext: f ? (0, o.A)(g, p.Qp.USER_ACTIVITY_SYNC) : void 0,
        disabled: f
    }, "spotify-sync-".concat(e.session_id)) : null]
}