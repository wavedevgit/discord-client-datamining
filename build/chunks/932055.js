/** chunk id: 932055, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Jz: () => A,
    i: () => S,
    vd: () => c
}), i(321073);
var n = i(311907),
    l = i(264686),
    s = i(839214),
    r = i(419954),
    a = i(400492),
    u = i(803224),
    o = i(780964),
    d = i(985018);
let T = (0, s.D)(() => ({
    currentPlayingSound: null
}));

function c() {
    let e = T.getField("currentPlayingSound");
    null == e || e.stop(), T.setState({
        currentPlayingSound: null
    })
}

function A(e) {
    let t = T.getField("currentPlayingSound");
    null == t || t.stop();
    let i = (0, a.Ak)(e);
    T.setState({
        currentPlayingSound: i
    })
}

function S(e) {
    return (0, r.zD)("".concat(o.X.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
        useTitle: e.useTitle,
        useSubtitle: () => d.intl.format(d.t.OOiGCM, {
            onClick: () => A(e.sound)
        }),
        useValue: () => {
            var t;
            let i = (0, n.bG)([u.A], () => u.A.isSoundDisabled(e.sound)),
                l = null == (t = e.useDisabled) ? void 0 : t.call(e);
            return !i && !l
        },
        setValue: t => {
            let i = u.A.getDisabledSounds().filter(t => t !== e.sound);
            t || i.push(e.sound), l.default.setDisabledSounds(i)
        },
        useDisabled: () => {
            var t;
            let i = null == (t = e.useDisabled) ? void 0 : t.call(e),
                l = (0, n.bG)([u.A], () => u.A.getDisableAllSounds());
            return i || l
        },
        useDisabledMessage: e.useDisabledMessage
    })
}