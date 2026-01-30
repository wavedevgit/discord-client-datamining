/** chunk id: 353411, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Gq: () => v,
    J$: () => O,
    _B: () => b
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(451988),
    o = n(475743),
    s = n(961350),
    l = n(927813),
    c = n(427262),
    u = n(655116),
    d = n(160768),
    f = n(341335),
    p = n(286617),
    _ = n(533207),
    h = n(881335),
    m = n(272984);
let g = 30 * l.A.Millis.SECOND;

function E(e) {
    let {
        currentUserTrackId: t,
        syncingWithUser: n,
        syncingWithParty: i
    } = e, [s, l] = r.useState(!1), [c] = r.useState(() => new a.Ep), u = (0, o.A)(t);
    r.useEffect(() => {
        s && (t !== u || n || i) && (l(!1), c.stop())
    }, [t, u, n, i, s, c]);
    let d = r.useCallback(() => {
            l(!0), c.start(g, () => l(!1))
        }, [c]),
        f = r.useCallback(() => {
            l(!1), c.stop()
        }, [c]);
    return r.useEffect(() => () => c.stop(), [c]), {
        loading: s,
        startLoading: d,
        clearLoading: f
    }
}

function y(e, t) {
    return (0, i.cf)([u.A, s.default], () => (0, p.A)(u.A, s.default, t, e), [e, t])
}

function b(e, t, n) {
    let i = y(e, t),
        {
            notPlayable: a,
            isCurrentUser: o,
            playingSameTrack: s
        } = i,
        {
            loading: l,
            startLoading: c,
            clearLoading: u
        } = E(i),
        p = r.useCallback(() => {
            c(), (0, h.A)(i, m.Qp.USER_ACTIVITY_PLAY, n).catch(u)
        }, [i, n, c, u]);
    return {
        label: (0, d.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, f.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        disabled: !l && (o || a || s),
        loading: l,
        onClick: p,
        spotifyData: i
    }
}

function O(e, t, n, i) {
    let a = null != i ? i : c.Ay.getName(t),
        o = y(e, t),
        {
            notPlayable: s,
            syncingWithUser: l,
            syncingWithParty: u,
            isCurrentUser: p
        } = o,
        {
            loading: h,
            startLoading: g,
            clearLoading: b
        } = E(o),
        O = r.useCallback(() => {
            g(), (0, _.A)(o, m.Qp.USER_ACTIVITY_SYNC, n).catch(b)
        }, [o, n, g, b]);
    return {
        label: (0, d.A)(o, m.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, f.A)(o, m.Qp.USER_ACTIVITY_SYNC, a),
        disabled: !h && (s || p || l || u),
        loading: h,
        onClick: O,
        spotifyData: o
    }
}

function v(e, t, n) {
    let i = y(e, t),
        {
            notPlayable: a,
            syncingWithUser: o,
            syncingWithParty: s,
            isCurrentUser: l
        } = i,
        {
            loading: c,
            startLoading: u,
            clearLoading: p
        } = E(i),
        h = r.useCallback(() => {
            u(), (0, _.A)(i, m.Qp.EMBED_SYNC, n).catch(p)
        }, [i, n, u, p]);
    return {
        label: (0, d.A)(i, m.Qp.EMBED_SYNC),
        tooltip: (0, f.A)(i, m.Qp.EMBED_SYNC),
        disabled: !c && (l || o || s || a),
        loading: c,
        onClick: h,
        spotifyData: i
    }
}