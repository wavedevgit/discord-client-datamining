/** chunk id: 666717, original params: e,t,n (module,exports,require) **/
n.d(t, {
    PA: () => p,
    RT: () => f,
    _t: () => d,
    av: () => u,
    iV: () => c,
    yO: () => g
});
var r = n(440745),
    l = n.n(r),
    i = n(317097),
    a = n(654107),
    o = n(287809),
    s = n(134753);

function c(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext("2d");
    null != t && null != n && n.clearRect(0, 0, t.width, t.height)
}

function u(e, t) {
    let {
        width: n,
        height: r,
        left: l,
        top: i
    } = e.getBoundingClientRect();
    return {
        x: (t.clientX - l) / n,
        y: (t.clientY - i) / r
    }
}

function d(e, t) {
    return Math.round(e * t * window.devicePixelRatio)
}

function f(e, t, n) {
    return {
        x: d(e.x, t),
        y: d(e.y, n),
        deltaTime: e.deltaTime
    }
}

function p(e) {
    return e.type === s.Z.LINE
}

function g(e, t, n, r) {
    var s;
    let c = o.default.getUser(e),
        u = null == c ? void 0 : c.getAvatarURL(null, 80),
        d = null != u ? null == (s = a.Ip.getState().palette[u]) ? void 0 : s[0] : null,
        f = null != d ? "#".concat(l()({
            r: d[0],
            g: d[1],
            b: d[2]
        }).toHex()) : r,
        p = (0, i.OK)((0, i.LX)(f)) > .5 ? n : t;
    return {
        fillColor: f,
        outlineColor: p
    }
}
n(824217)