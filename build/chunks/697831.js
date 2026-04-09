/** chunk id: 697831 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
    l = n(961350),
    s = n(655116),
    o = n(341335),
    d = n(286617),
    c = n(533207),
    u = n(881335),
    A = n(272984),
    _ = n(985018);

function h(e, t, n) {
    let h = (0, a.bG)([s.A, l.default], () => null != t ? (0, d.A)(s.A, l.default, t, e) : void 0, [e, t]);
    if (null == h || null == e || null == t) return null;
    let m = h.isCurrentUser || h.notPlayable || h.playingSameTrack,
        g = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
    return [(0, i.jsx)(r.Drp, {
        id: `spotify-play-${e.session_id}`,
        action: () => (0, u.A)(h, A.Qp.USER_ACTIVITY_PLAY, n),
        label: _.intl.string(_.t.rRffNz),
        subtext: m ? (0, o.A)(h, A.Qp.USER_ACTIVITY_PLAY) : void 0,
        disabled: m
    }, `spotify-play-${e.session_id}`), h.canPlaySpotify ? (0, i.jsx)(r.Drp, {
        id: `spotify-sync-${e.session_id}`,
        action: () => (0, c.A)(h, A.Qp.USER_ACTIVITY_SYNC, n),
        label: _.intl.string(_.t.eU3inB),
        subtext: g ? (0, o.A)(h, A.Qp.USER_ACTIVITY_SYNC) : void 0,
        disabled: g
    }, `spotify-sync-${e.session_id}`) : null]
}