/** chunk id: 368344, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    DT: () => u,
    P5: () => s,
    _e: () => l,
    tS: () => c
}), n(747238), n(812715), n(667532);
var r = n(214958),
    i = n.n(r),
    a = n(823598),
    o = n(713754);

function s(e, t) {
    var n;
    let r = !1,
        a = t.map((t, n) => {
            let {
                guid: i,
                guid: a,
                name: s,
                name: l,
                index: c,
                facing: u,
                hardwareId: d,
                containerId: f,
                effects: p
            } = t;
            return /^default/.test(s) ? (r = !0, i = o.dx, s = s.replace("default", "Default")) : i = null != i && "" !== i ? i : s, null != c && (n = c), {
                id: i,
                type: e,
                index: n,
                name: s,
                originalName: l,
                originalId: a,
                facing: u,
                hardwareId: d,
                containerId: f,
                effects: p
            }
        });
    return e !== o.oh.VIDEO_INPUT && !r && (null === i() || void 0 === i() || null == (n = i().os) ? void 0 : n.family) != null && /^win/i.test(i().os.family) && a.unshift({
        id: o.dx,
        type: e,
        index: -1,
        name: "Default"
    }), a
}

function l() {
    return new Promise(e => {
        (0, a.lE)().getInputDevices(t => e(s(o.oh.AUDIO_INPUT, t)))
    })
}

function c() {
    return new Promise(e => {
        (0, a.lE)().getOutputDevices(t => e(s(o.oh.AUDIO_OUTPUT, t)))
    })
}

function u() {
    return new Promise(e => {
        (0, a.lE)().getVideoInputDevices(t => e(s(o.oh.VIDEO_INPUT, t)))
    })
}