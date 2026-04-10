/** chunk id: 286237 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    b: () => u
});
var i = n(812729),
    s = n.n(i),
    l = n(311907),
    r = n(587895),
    a = n(429913),
    o = n(616356),
    d = n(15285);

function c(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0
}

function u() {
    let e = o.A.getStreamerActiveStreamMetadata(),
        t = d.Ay.getVisibleGame(),
        n = null != t ? d.Ay.getGameOrTransformedSubgameForPID(t.pid) : null,
        i = c(e, n);
    return {
        runningGame: n ?? void 0,
        runningGameApplication: r.A.getApplication(i) ?? void 0
    }
}

function m() {
    let e = (0, l.bG)([o.A], () => o.A.getStreamerActiveStreamMetadata()),
        t = (0, l.bG)([d.Ay], () => {
            let e = d.Ay.getVisibleGame();
            return null != e ? d.Ay.getGameOrTransformedSubgameForPID(e.pid) : null
        }, [], s()),
        [n] = (0, a.A)([c(e, t)]);
    return {
        runningGame: t ?? void 0,
        runningGameApplication: n ?? void 0
    }
}