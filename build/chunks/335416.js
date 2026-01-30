/** chunk id: 335416, original params: e,t,n (module,exports,require) **/
n.d(t, {
    HL: () => i,
    Jh: () => l,
    Ux: () => a,
    VM: () => r
}), n(457529), n(896048);
let l = {
        waveformBlockWidth: 2,
        waveformBarWidth: .5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: .3
    },
    i = (e, t) => {
        let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
        return "".concat(n, "-").concat(JSON.stringify(t))
    },
    a = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
    r = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])