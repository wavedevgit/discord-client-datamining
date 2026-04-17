/** chunk id: 335494 params = (module,exports,require) **/
l.d(t, {
    A: () => x
}), l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(827734),
    d = l(397927),
    o = l(765671),
    c = l(602674),
    u = l(696016),
    m = l(335416),
    h = l(664875);
let p = new Map,
    x = a.memo(function(e) {
        let {
            clipId: t,
            voiceAudioTracks: i,
            onMouseDown: x,
            className: g
        } = e, f = a.useRef(null), {
            ref: v,
            width: j,
            height: b
        } = (0, o.Ay)(), [C, y] = a.useState(null), A = (0, d.rdh)(r.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (a.useEffect(() => (f.current = new Worker(new URL("/assets/" + l.u("33197"), l.b)), () => {
            f.current?.terminate()
        }), []), a.useEffect(() => {
            if (0 === j || 0 === i.length || null == f.current) return;
            let e = `${t}-${i.map(e=>e.trackName).join(",")}-${j}`,
                l = p.get(e);
            if (null != l) return void y(l.waveform);
            let n = f.current,
                a = !1,
                s = t => {
                    if (a) return;
                    let {
                        waveform: l,
                        error: n
                    } = t.data;
                    null != n ? u.nx.error("Failed to load waveform:", n) : (p.set(e, {
                        waveform: l
                    }), y(l))
                };
            return n.addEventListener("message", s), (async () => {
                try {
                    let e = (0, c.v)();
                    if (null == e) throw Error("Failed to create audio context");
                    let t = await Promise.all(i.map(t => e.decodeAudioData(t.arrayBuffer.slice(0))));
                    if (a) return;
                    let l = [],
                        s = [];
                    for (let e of t) {
                        let t = [];
                        for (let l = 0; l < e.numberOfChannels; l++) {
                            let n = new Float32Array(e.getChannelData(l));
                            t.push(n), s.push(n.buffer)
                        }
                        l.push(t)
                    }
                    n.postMessage({
                        trackChannels: l,
                        width: j
                    }, s)
                } catch (e) {
                    a || u.nx.error("Failed to decode audio:", e)
                }
            })(), () => {
                a = !0, n.removeEventListener("message", s)
            }
        }, [i, t, j]), a.useEffect(() => {
            if (null == v.current || null == C || (j ?? 0) === 0 || (b ?? 0) === 0) return;
            let e = v.current,
                t = e.getContext("2d");
            if (null == t) return;
            let {
                width: l,
                height: n
            } = e, a = l / C.length, i = -(a * (m.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, n), t.fillStyle = A;
            for (let e = 0; e < C.length; e++) {
                let l = C[e] * n,
                    s = e * a + i;
                t.fillRect(s, n, a - i, -l)
            }
        }, [A, j, v, b, C]), 0 === i.length) ? null : (0, n.jsx)("div", {
            className: s()(h.k, g),
            children: (0, n.jsx)("canvas", {
                className: h.s,
                ref: v,
                width: (j ?? 0) * 2,
                height: (b ?? 0) * 2,
                onMouseDown: x
            })
        })
    })