/** Chunk was on 60667 **/
/** chunk id: 286237, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    b: () => u
}), n(896048);
var r = n(812729),
    i = n.n(r),
    l = n(311907),
    s = n(587895),
    a = n(429913),
    o = n(616356),
    c = n(15285);

function d(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0
}

function u() {
    let e = o.A.getStreamerActiveStreamMetadata(),
        t = c.Ay.getVisibleGame(),
        n = null != t ? c.Ay.getGameOrTransformedSubgameForPID(t.pid) : null,
        r = d(e, n),
        i = s.A.getApplication(r);
    return {
        runningGame: null != n ? n : void 0,
        runningGameApplication: null != i ? i : void 0
    }
}

function _() {
    let e = (0, l.bG)([o.A], () => o.A.getStreamerActiveStreamMetadata()),
        t = (0, l.bG)([c.Ay], () => {
            let e = c.Ay.getVisibleGame();
            return null != e ? c.Ay.getGameOrTransformedSubgameForPID(e.pid) : null
        }, [], i()),
        [n] = (0, a.A)([d(e, t)]);
    return {
        runningGame: null != t ? t : void 0,
        runningGameApplication: null != n ? n : void 0
    }
}