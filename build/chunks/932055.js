/** Chunk was on 28979 **/
/** chunk id: 932055, original params: t,e,i (module,exports,require) **/
i.d(e, {
    i: () => S,
    vd: () => d
}), i(321073);
var n = i(311907),
    l = i(264686),
    s = i(839214),
    r = i(419954),
    u = i(400492),
    a = i(803224),
    o = i(780964),
    T = i(985018);
let A = (0, s.D)(() => ({
    currentPlayingSound: null
}));

function d() {
    let t = A.getField("currentPlayingSound");
    null == t || t.stop(), A.setState({
        currentPlayingSound: null
    })
}

function S(t) {
    return (0, r.zD)("".concat(o.X.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
        useTitle: t.useTitle,
        useSubtitle: () => T.intl.format(T.t.OOiGCM, {
            onClick: () => {
                var e;
                let i, n;
                return e = t.sound, null == (i = A.getField("currentPlayingSound")) || i.stop(), n = (0, u.Ak)(e), void A.setState({
                    currentPlayingSound: n
                })
            }
        }),
        useValue: () => {
            var e;
            let i = (0, n.bG)([a.A], () => a.A.isSoundDisabled(t.sound)),
                l = null == (e = t.useDisabled) ? void 0 : e.call(t);
            return !i && !l
        },
        setValue: e => {
            let i = a.A.getDisabledSounds().filter(e => e !== t.sound);
            e || i.push(t.sound), l.default.setDisabledSounds(i)
        },
        useDisabled: () => {
            var e;
            let i = null == (e = t.useDisabled) ? void 0 : e.call(t),
                l = (0, n.bG)([a.A], () => a.A.getDisableAllSounds());
            return i || l
        },
        useDisabledMessage: t.useDisabledMessage
    })
}