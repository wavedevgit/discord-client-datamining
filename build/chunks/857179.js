/** chunk id: 857179 params = (module,exports,require) **/
n.d(t, {
    G: () => p,
    o: () => m
});
var i = n(284009),
    a = n.n(i),
    r = n(205693),
    l = n(602674),
    s = n(76788),
    o = n(738011),
    d = n(536184),
    c = n(430452),
    u = n(728458),
    A = n(904054);
let h = new Map;
async function _(e) {
    let t = h.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, l.v)(),
        a = await i?.decodeAudioData(n);
    return null != a && h.set(e, a), a
}

function m(e) {
    let {
        soundKey: t,
        soundURL: n,
        soundVolume: i,
        reportSoundStartedPlaying: l
    } = e;
    return new Promise(async (e, s) => {
        let o = await _(n);
        null == o && e(), c.Ay.getMediaEngine().eachConnection(n => {
            n.context === r.x.DEFAULT && (l(), a()(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, i, (t, n) => {
                0 !== t ? s(Error(`${n}`)) : e()
            }))
        })
    })
}

function p(e, t) {
    let {
        soundKey: n,
        soundURL: i,
        soundVolume: a,
        reportSoundStartedPlaying: r
    } = e, l = t.get(n);
    if (null != l) {
        l.currentTime = 0;
        return
    }
    return new Promise(async e => {
        let l = new(await (0, d.A)(i));
        l.src = i, l.volume = (0, A.A)(a), l.addEventListener(l instanceof s.A.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
            r(), t.set(n, l), l.play()?.catch(i => {
                if ((0, o.u)(i)) {
                    u.A.captureException(i, {
                        tags: {
                            errorType: "autoplay_policy",
                            expected: "true"
                        }
                    }), t.delete(n), l.src = "", e();
                    return
                }
                throw i
            })
        }), l.addEventListener("ended", () => {
            t.delete(n), l.src = "", e()
        })
    })
}