/** chunk id: 761661 params = (module,exports,require) **/
n.d(t, {
    CZ: () => u,
    Qp: () => c,
    XG: () => _,
    dh: () => d,
    f4: () => o
});
var i = n(812729),
    a = n.n(i),
    r = n(839214),
    l = n(652896);
let s = (0, r.D)(() => ({
    streams: {}
}));

function o(e) {
    let t = (0, l._z)(e),
        n = s.useState(e => e.streams, a());
    return n[t]?.zoom ?? 100
}

function d(e) {
    return o(e) / 100
}

function c(e, t) {
    let n = (0, l._z)(e);
    s.setState(e => ({
        ...e,
        streams: {
            ...e.streams,
            [n]: {
                zoom: t,
                fitOverride: e.streams[n]?.fitOverride
            }
        }
    }), !0)
}

function u(e, t) {
    let n = (0, l._z)(e);
    s.setState(e => ({
        ...e,
        streams: {
            ...e.streams,
            [n]: {
                zoom: e.streams[n]?.zoom,
                fitOverride: t
            }
        }
    }))
}

function _(e) {
    let t = (0, l._z)(e),
        n = s.useState(e => e.streams, a());
    return n[t]?.fitOverride
}