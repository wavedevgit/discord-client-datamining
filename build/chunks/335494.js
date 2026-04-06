/** chunk id: 335494 params = (module,exports,require) **/
l.d(t, {
    A: () => x
}), l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(827734),
    o = l(397927),
    d = l(765671),
    c = l(602674),
    u = l(696016),
    m = l(335416),
    h = l(665083);
let p = new Map,
    x = n.memo(function(e) {
        let {
            clipId: t,
            voiceAudioTracks: i,
            onMouseDown: x,
            className: f
        } = e, g = n.useRef(null), {
            ref: v,
            width: j,
            height: b
        } = (0, d.Ay)(), [C, y] = n.useState(null), N = (0, o.rdh)(r.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(() => (g.current = new Worker(new URL("/assets/" + l.u("33197"), l.b)), () => {
            g.current?.terminate()
        }), []), n.useEffect(() => {
            if (0 === j || 0 === i.length || null == g.current) return;
            let e = `${t}-${i.map(e=>e.trackName).join(",")}-${j}`,
                l = p.get(e);
            if (null != l) return void y(l.waveform);
            let a = g.current,
                n = !1,
                s = t => {
                    if (n) return;
                    let {
                        waveform: l,
                        error: a
                    } = t.data;
                    null != a ? u.nx.error("Failed to load waveform:", a) : (p.set(e, {
                        waveform: l
                    }), y(l))
                };
            return a.addEventListener("message", s), (async () => {
                try {
                    let e = (0, c.v)();
                    if (null == e) throw Error("Failed to create audio context");
                    let t = await Promise.all(i.map(t => e.decodeAudioData(t.arrayBuffer.slice(0))));
                    if (n) return;
                    let l = [],
                        s = [];
                    for (let e of t) {
                        let t = [];
                        for (let l = 0; l < e.numberOfChannels; l++) {
                            let a = new Float32Array(e.getChannelData(l));
                            t.push(a), s.push(a.buffer)
                        }
                        l.push(t)
                    }
                    a.postMessage({
                        trackChannels: l,
                        width: j
                    }, s)
                } catch (e) {
                    n || u.nx.error("Failed to decode audio:", e)
                }
            })(), () => {
                n = !0, a.removeEventListener("message", s)
            }
        }, [i, t, j]), n.useEffect(() => {
            if (null == v.current || null == C || (j ?? 0) === 0 || (b ?? 0) === 0) return;
            let e = v.current,
                t = e.getContext("2d");
            if (null == t) return;
            let {
                width: l,
                height: a
            } = e, n = l / C.length, i = -(n * (m.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), t.fillStyle = N;
            for (let e = 0; e < C.length; e++) {
                let l = C[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l)
            }
        }, [N, j, v, b, C]), 0 === i.length) ? null : (0, a.jsx)("div", {
            className: s()(h.k, f),
            children: (0, a.jsx)("canvas", {
                className: h.s,
                ref: v,
                width: (j ?? 0) * 2,
                height: (b ?? 0) * 2,
                onMouseDown: x
            })
        })
    })