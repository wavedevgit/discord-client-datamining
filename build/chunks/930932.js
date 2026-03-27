/** chunk id: 930932 params = (module,exports,require) **/
a.d(l, {
    A_: () => o,
    Op: () => f,
    TK: () => g,
    de: () => c,
    ed: () => O,
    n3: () => b,
    wq: () => N
}), a(321073);
var t = a(735438),
    n = a.n(t),
    i = a(253932),
    r = a(954571),
    d = a(670455),
    s = a(652215),
    u = a(716829),
    E = a(985018);
let O = (e, l) => {
    let a = n().shuffle(e),
        t = a.findIndex(e => e.value === l);
    if (t > -1) {
        let e = a[t];
        a.splice(t, 1), a.push(e)
    }
    return a
};

function b(e) {
    let {
        feedbackType: l,
        location: a
    } = e;
    r.default.track(s.HAw.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
        feedback_type: d.MW[l],
        opted_out_until: d.fs
    }), i.Yt.updateSetting(e => ({
        ...e,
        [l]: {
            ...e[l],
            optOutExpiryTime: d.fs
        }
    }))
}

function v(e) {
    return e.filter(e => {
        let {
            disabled: l
        } = e;
        return !l
    }).map(e => {
        let {
            disabled: l,
            ...a
        } = e;
        return a
    })
}

function o() {
    return v([{
        variant: d.UV.SELF,
        value: d.bO.COULD_NOT_CONNECT,
        label: E.intl.string(u.default.gMHKDJ)
    }, {
        value: d.bO.HIGH_TTC,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.y06Ayn)
    }, {
        value: d.bO.HIGH_LATENCY,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.y5k8Jq)
    }, {
        value: d.bO.ROBOT_VOICE,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.f2914v)
    }, {
        value: d.bO.DESYNC,
        variant: d.UV.UNSPECIFIED,
        label: E.intl.string(u.default["zk+QL1"])
    }, {
        value: d.bO.CUTTING,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.K5vYQA)
    }])
}

function f(e) {
    let {
        isMobile: l
    } = e;
    return v([{
        value: d.X.NO_AUDIO,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["GWypH+"])
    }, {
        value: d.X.NO_AUDIO,
        variant: d.UV.OTHERS,
        label: E.intl.string(u.default.ftSvQ0)
    }, {
        value: d.X.LOW_QUALITY_AUDIO,
        variant: d.UV.OTHERS,
        label: E.intl.string(u.default["1DnNRO"])
    }, {
        value: d.X.ROBOT_VOICE,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.yGe0BL)
    }, {
        value: d.X.ECHO,
        variant: d.UV.OTHERS,
        label: E.intl.string(u.default.Q5Dsaz)
    }, {
        value: d.X.TOO_QUIET_OR_LOUD,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default["1o77I3"])
    }, {
        value: d.X.CUTTING,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.RK9DUi)
    }, {
        value: d.X.DELAYED,
        variant: d.UV.UNSPECIFIED,
        label: E.intl.string(u.default.RGRgmM)
    }, {
        value: d.X.BACKGROUND_NOISE,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default["anHk1/"])
    }, {
        value: d.X.UNABLE_TO_FIND_DEVICE,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["05VSjm"])
    }, {
        value: d.X.COMPLAINTS,
        variant: d.UV.OTHERS,
        label: E.intl.string(u.default.kbbtwi)
    }, {
        value: d.X.TROUBLE_WITH_SPEAKERPHONE,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["4qlGrO"]),
        disabled: !l
    }, {
        value: d.X.NO_GAME_AUDIO,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["2IG95D"])
    }])
}

function c() {
    return v([{
        value: d.AO.NO_VIDEO,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["Bh+02d"])
    }, {
        value: d.AO.NO_VIDEO,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default["R+wqwU"])
    }, {
        value: d.AO.FREEZING_OR_HITCHING,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default["8I/GUL"])
    }, {
        value: d.AO.BLURRY_OR_PIXELATED,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.k7Idoz)
    }, {
        value: d.AO.UNABLE_TO_ENABLE_DEVICE,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.QbC6La)
    }, {
        value: d.AO.DESYNC,
        variant: d.UV.UNSPECIFIED,
        label: E.intl.string(u.default.vRDE5O)
    }])
}

function N(e) {
    let {
        isStreamer: l
    } = e;
    return v([{
        value: d.j6.COULD_NOT_LOAD,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["w+kiDF"]),
        disabled: !l
    }, {
        value: d.j6.BLACK_SCREEN,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.RRZZZb),
        disabled: !l
    }, {
        value: d.j6.FREEZING_OR_HITCHING,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["3PKSkd"]),
        disabled: !l
    }, {
        value: d.j6.LAG,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.iMxexK),
        disabled: !l
    }, {
        value: d.j6.BLURRY_OR_PIXELATED,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["8ceyQy"]),
        disabled: !l
    }, {
        value: d.j6.NO_AUDIO,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.HaZSC3),
        disabled: !l
    }, {
        value: d.j6.BAD_AUDIO,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["zIC+8Y"]),
        disabled: !l
    }, {
        value: d.j6.STOPPED_UNEXPECTEDLY,
        variant: d.UV.SELF,
        label: E.intl.string(u.default["/nlKuG"]),
        disabled: !l
    }, {
        value: d.j6.DESYNC,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.JS6akP),
        disabled: !l
    }, {
        value: d.j6.NO_GAME_AUDIO,
        variant: d.UV.SELF,
        label: E.intl.string(u.default.TaIrh5),
        disabled: !l
    }, {
        value: d.j6.COULD_NOT_LOAD,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.jU9Zs8),
        disabled: l
    }, {
        value: d.j6.BLACK_SCREEN,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.aml28x),
        disabled: l
    }, {
        value: d.j6.FREEZING_OR_HITCHING,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.V3EeCH),
        disabled: l
    }, {
        value: d.j6.LAG,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.hi1Y39),
        disabled: l
    }, {
        value: d.j6.BLURRY_OR_PIXELATED,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.qdBn3L),
        disabled: l
    }, {
        value: d.j6.NO_AUDIO,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.DOOlop),
        disabled: l
    }, {
        value: d.j6.BAD_AUDIO,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.k7bdGE),
        disabled: l
    }, {
        value: d.j6.STOPPED_UNEXPECTEDLY,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.jPD998),
        disabled: l
    }, {
        value: d.j6.DESYNC,
        variant: d.UV.SOMEONE,
        label: E.intl.string(u.default.JfAvQp),
        disabled: l
    }])
}

function g() {
    return v([{
        value: d.CW.TOXIC_OR_INAPPROPRIATE,
        variant: d.UV.OTHERS,
        label: E.intl.string(u.default.PLBRzF)
    }])
}