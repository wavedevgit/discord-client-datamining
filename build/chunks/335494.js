/** chunk id: 335494 params = (module,exports,require) **/
a.d(t, {
    A: () => f
}), a(323874), a(14289), a(35956), a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162), a(321073);
var l = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(827734),
    o = a(397927),
    u = a(765671),
    d = a(602674),
    c = a(696016),
    m = a(335416),
    h = a(573862);
let p = new Map,
    f = n.memo(function(e) {
        let {
            clipId: t,
            voiceAudioTracks: i,
            onMouseDown: f,
            className: g
        } = e, v = n.useRef(null), {
            ref: x,
            width: b,
            height: j
        } = (0, u.Ay)(), [_, C] = n.useState(null), k = (0, o.rdh)(r.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(() => (v.current = new Worker(new URL("/assets/" + a.u("33197"), a.b)), () => {
            v.current?.terminate()
        }), []), n.useEffect(() => {
            if (0 === b || 0 === i.length || null == v.current) return;
            let e = `${t}-${i.map(e=>e.trackName).join(",")}-${b}`,
                a = p.get(e);
            if (null != a) return void C(a.waveform);
            let l = v.current,
                n = !1,
                s = t => {
                    if (n) return;
                    let {
                        waveform: a,
                        error: l
                    } = t.data;
                    null != l ? c.nx.error("Failed to load waveform:", l) : (p.set(e, {
                        waveform: a
                    }), C(a))
                };
            return l.addEventListener("message", s), (async () => {
                try {
                    let e = (0, d.v)();
                    if (null == e) throw Error("Failed to create audio context");
                    let t = await Promise.all(i.map(t => e.decodeAudioData(t.arrayBuffer.slice(0))));
                    if (n) return;
                    let a = [],
                        s = [];
                    for (let e of t) {
                        let t = [];
                        for (let a = 0; a < e.numberOfChannels; a++) {
                            let l = new Float32Array(e.getChannelData(a));
                            t.push(l), s.push(l.buffer)
                        }
                        a.push(t)
                    }
                    l.postMessage({
                        trackChannels: a,
                        width: b
                    }, s)
                } catch (e) {
                    n || c.nx.error("Failed to decode audio:", e)
                }
            })(), () => {
                n = !0, l.removeEventListener("message", s)
            }
        }, [i, t, b]), n.useEffect(() => {
            if (null == x.current || null == _ || (b ?? 0) === 0 || (j ?? 0) === 0) return;
            let e = x.current,
                t = e.getContext("2d");
            if (null == t) return;
            let {
                width: a,
                height: l
            } = e, n = a / _.length, i = -(n * (m.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, a, l), t.fillStyle = k;
            for (let e = 0; e < _.length; e++) {
                let a = _[e] * l,
                    s = e * n + i;
                t.fillRect(s, l, n - i, -a)
            }
        }, [k, b, x, j, _]), 0 === i.length) ? null : (0, l.jsx)("div", {
            className: s()(h.k, g),
            children: (0, l.jsx)("canvas", {
                className: h.s,
                ref: x,
                width: (b ?? 0) * 2,
                height: (j ?? 0) * 2,
                onMouseDown: f
            })
        })
    })