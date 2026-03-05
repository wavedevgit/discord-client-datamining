/** chunk id: 478840 params = (module,exports,require) **/
i.d(t, {
    V: () => d
});
var n = i(310784),
    l = i.n(n),
    a = i(325335),
    s = i(998304),
    r = i(300703);
let o = "#ffffff",
    u = "#36393e",
    d = (e, t, i) => {
        if (null == e || e.length < 1) return null;
        let n = (e => {
                let {
                    colors: t,
                    saturationFactor: i = 1,
                    shouldProcessMobileColors: n = !1
                } = e, d = (e => {
                    let {
                        colors: t,
                        saturationFactor: i = 1
                    } = e;
                    if (null == t || t.length < 1) return null;
                    let n = (0, s.h6)(t),
                        r = a.A.parseString(n);
                    if (null == r) return null;
                    let d = (0, s.IB)(r.red, r.blue, r.green),
                        c = (0, s.lZ)({
                            foreground: l()((0, s.fE)(r, .6, !0).toHexString()),
                            background: l()(o),
                            ratio: 3,
                            saturationFactor: i
                        }) ?? r,
                        h = (0, s.lZ)({
                            foreground: l()((0, s.fE)(r, .6, !1).toHexString()),
                            background: l()(u),
                            ratio: 5,
                            saturationFactor: i
                        }) ?? r,
                        m = (0, s.lZ)({
                            foreground: l()(n),
                            background: l()(o),
                            ratio: 7,
                            saturationFactor: i
                        }),
                        p = (0, s.lZ)({
                            foreground: l()(n),
                            background: l()(u),
                            ratio: 7,
                            saturationFactor: i
                        });
                    return {
                        LIGHT: {
                            accentColor: m?.hex(),
                            backgroundColor: (0, s.WN)({
                                colorRGB: c,
                                saturationFactor: i
                            }),
                            highlightColor: r?.toHexString(),
                            opacity: d?.saturation < .1 ? .35 : .1
                        },
                        DARK: {
                            accentColor: p?.hex(),
                            backgroundColor: (0, s.WN)({
                                colorRGB: h,
                                saturationFactor: i
                            }),
                            highlightColor: r?.toHexString(),
                            opacity: d?.saturation < .1 ? .5 : .2
                        }
                    }
                })({
                    colors: t,
                    saturationFactor: i
                });
                return r.A.applyPlatformToThemedEmojiColorPalette({
                    palette: d,
                    shouldProcessMobileColors: n
                })
            })({
                colors: e,
                saturationFactor: t
            }),
            d = i ? n?.DARK : n?.LIGHT;
        return {
            backgroundColor: d?.backgroundColor,
            accentColor: d?.accentColor,
            highlightColor: d?.highlightColor,
            opacity: d?.opacity ?? .15
        }
    }