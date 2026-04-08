/** chunk id: 478840 params = (module,exports,require) **/
i.d(t, {
    V: () => d
});
var n = i(310784),
    a = i.n(n),
    l = i(325335),
    o = i(998304),
    r = i(300703);
let s = "#ffffff",
    c = "#36393e",
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
                    let n = (0, o.h6)(t),
                        r = l.A.parseString(n);
                    if (null == r) return null;
                    let d = (0, o.IB)(r.red, r.blue, r.green),
                        u = (0, o.lZ)({
                            foreground: a()((0, o.fE)(r, .6, !0).toHexString()),
                            background: a()(s),
                            ratio: 3,
                            saturationFactor: i
                        }) ?? r,
                        h = (0, o.lZ)({
                            foreground: a()((0, o.fE)(r, .6, !1).toHexString()),
                            background: a()(c),
                            ratio: 5,
                            saturationFactor: i
                        }) ?? r,
                        m = (0, o.lZ)({
                            foreground: a()(n),
                            background: a()(s),
                            ratio: 7,
                            saturationFactor: i
                        }),
                        p = (0, o.lZ)({
                            foreground: a()(n),
                            background: a()(c),
                            ratio: 7,
                            saturationFactor: i
                        });
                    return {
                        LIGHT: {
                            accentColor: m?.hex(),
                            backgroundColor: (0, o.WN)({
                                colorRGB: u,
                                saturationFactor: i
                            }),
                            highlightColor: r?.toHexString(),
                            opacity: d?.saturation < .1 ? .35 : .1
                        },
                        DARK: {
                            accentColor: p?.hex(),
                            backgroundColor: (0, o.WN)({
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