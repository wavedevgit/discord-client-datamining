/** chunk id: 932055 params = (module,exports,require) **/
n.d(t, {
    Jz: () => _,
    i: () => g,
    vd: () => m
}), n(321073);
var i = n(311907),
    s = n(264686),
    l = n(839214),
    a = n(419954),
    r = n(400492),
    o = n(803224),
    d = n(780964),
    c = n(985018);
let u = (0, l.D)(() => ({
    currentPlayingSound: null
}));

function m() {
    let e = u.getField("currentPlayingSound");
    e?.stop(), u.setState({
        currentPlayingSound: null
    })
}

function _(e) {
    let t = u.getField("currentPlayingSound");
    t?.stop();
    let n = (0, r.Ak)(e);
    u.setState({
        currentPlayingSound: n
    })
}

function g(e) {
    return (0, a.zD)(`${d.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => c.intl.format(c.t.OOiGCM, {
            onClick: () => _(e.sound)
        }),
        useValue: () => {
            let t = (0, i.bG)([o.A], () => o.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n
        },
        setValue: t => {
            let n = o.A.getDisabledSounds().filter(t => t !== e.sound);
            t || n.push(e.sound), s.default.setDisabledSounds(n)
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, i.bG)([o.A], () => o.A.getDisableAllSounds());
            return t || n
        },
        useDisabledMessage: e.useDisabledMessage
    })
}