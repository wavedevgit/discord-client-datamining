/** chunk id: 857179 params = (module,exports,require) **/
n.d(t, {
    G: () => g,
    o: () => m
});
var i = n(284009),
    a = n.n(i),
    l = n(205693),
    r = n(602674),
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
        i = (0, r.v)(),
        a = await i?.decodeAudioData(n);
    return null != a && h.set(e, a), a
}

function m(e) {
    let {
        soundKey: t,
        soundURL: n,
        soundVolume: i,
        reportSoundStartedPlaying: r
    } = e;
    return new Promise(async (e, s) => {
        let o = await _(n);
        null == o && e(), c.Ay.getMediaEngine().eachConnection(n => {
            n.context === l.x.DEFAULT && (r(), a()(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, i, (t, n) => {
                0 !== t ? s(Error(`${n}`)) : e()
            }))
        })
    })
}

function g(e, t) {
    let {
        soundKey: n,
        soundURL: i,
        soundVolume: a,
        reportSoundStartedPlaying: l
    } = e, r = t.get(n);
    if (null != r) {
        r.currentTime = 0;
        return
    }
    return new Promise(async e => {
        let r = new(await (0, d.A)(i));
        r.src = i, r.volume = (0, A.A)(a), r.addEventListener(r instanceof s.A.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
            l(), t.set(n, r), r.play()?.catch(i => {
                if ((0, o.u)(i)) {
                    u.A.captureException(i, {
                        tags: {
                            errorType: "autoplay_policy",
                            expected: "true"
                        }
                    }), t.delete(n), r.src = "", e();
                    return
                }
                throw i
            })
        }), r.addEventListener("ended", () => {
            t.delete(n), r.src = "", e()
        })
    })
}