/** chunk id: 335416, original params: e,t,l (module,exports,require) **/
l.d(t, {
    HL: () => a,
    Jh: () => n,
    Ux: () => i,
    VM: () => s
});
let n = {
        waveformBlockWidth: 2,
        waveformBarWidth: .5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: .3
    },
    a = (e, t) => {
        let l = `${e[0]}-${e[e.length-1]}-${e.byteLength}`;
        return `${l}-${JSON.stringify(t)}`
    },
    i = e => `${e.name}-${e.size}-${e.lastModified}`,
    s = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])