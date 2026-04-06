/** chunk id: 335416 params = (module,exports,require) **/
n.d(t, {
    HL: () => r,
    Jh: () => a,
    Ux: () => i,
    VM: () => o
});
let a = {
        waveformBlockWidth: 2,
        waveformBarWidth: .5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: .3
    },
    r = (e, t) => {
        let n = `${e[0]}-${e[e.length-1]}-${e.byteLength}`;
        return `${n}-${JSON.stringify(t)}`
    },
    i = e => `${e.name}-${e.size}-${e.lastModified}`,
    o = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])