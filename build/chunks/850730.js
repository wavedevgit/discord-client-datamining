/** chunk id: 850730, original params: e,t,n (module,exports,require) **/
n.d(t, {
    DB: () => N,
    ZL: () => S,
    ln: () => E,
    t0: () => y
});
var a = n(64700),
    i = n(873298),
    s = n(631670),
    l = n(817281),
    r = n(955572),
    o = n(775602),
    d = n(4227),
    c = n(993408),
    u = n(919395),
    m = n(587600),
    h = n(836602),
    p = n(544028),
    x = n(253932),
    g = n(594061),
    _ = n(287809),
    f = n(927578),
    b = n(652215),
    v = n(385803),
    j = n(381941);
let A = [b.NJ8.DARK, b.NJ8.LIGHT, b.NJ8.DARKER, b.NJ8.MIDNIGHT],
    C = [i.NS.COMPACT, i.NS.COZY, i.NS.DEFAULT];

function T(e) {
    return e[Math.floor(Math.random() * e.length)]
}
async function y() {
    let e, t = (e = _.default.getCurrentUser(), f.Ay.canUseClientThemes(e) ? Object.keys(v.ag).map(e => Number(e)) : []),
        n = t.length > 0 && Math.random() > .7;
    try {
        if (n) {
            let e, n = [...t, null],
                a = T(n);
            if (null != a) {
                let t = v.ag[a];
                e = t?.theme ?? b.NJ8.DARK
            } else e = T([b.NJ8.DARK, b.NJ8.DARKER, b.NJ8.MIDNIGHT]);
            await l.u_({
                theme: e,
                backgroundGradientPresetId: a ?? void 0,
                customUserThemeSettings: void 0
            }, g.Sb.INFREQUENT_USER_ACTION)
        } else {
            let e = T(A);
            await l.u_({
                theme: e,
                backgroundGradientPresetId: void 0,
                customUserThemeSettings: void 0
            }, g.Sb.INFREQUENT_USER_ACTION)
        }
    } catch (e) {}
}
async function S() {
    let e = d.A.purchases,
        t = (0, c.x9)(e),
        n = (0, c.$W)(e),
        a = t.length > 0,
        i = n.length > 0;
    if (a || i) try {
        if (a) {
            let e = T([...t, null]);
            (0, u.Dx)(e)
        }
        if (i) {
            let e = T([...n, null]);
            (0, u.pX)(e)
        }
        let e = h.A.getPendingChanges(),
            l = (0, m.Sk)(e);
        await (0, s._L)(l).finally(s.pZ)
    } catch (e) {}
}

function E() {
    try {
        let e = T(b.hH7.FONT_SIZES);
        (0, r.XS)(e);
        let t = T(j.qh);
        (0, r.AC)(t);
        let n = T(C);
        x.Xi.updateSetting(n)
    } catch (e) {}
}

function N() {
    a.useEffect(() => {
        let e = _.default.getCurrentUser(),
            t = x.eh.getSetting(),
            n = d.A.purchases,
            a = (0, c.x9)(n),
            i = (0, c.$W)(n),
            f = p.A.theme,
            b = t.backgroundGradientPresetId,
            v = e?.avatarDecoration?.skuId,
            j = e?.collectibles?.nameplate?.skuId,
            A = null != v ? a.find(e => e.skuId === v) ?? null : null,
            C = null != j ? i.find(e => e.skuId === j) ?? null : null,
            T = o.A.fontSize,
            y = o.A.messageGroupSpacing,
            S = x.Xi.getSetting();
        return () => {
            try {
                l.u_({
                    theme: f,
                    backgroundGradientPresetId: b ?? void 0,
                    customUserThemeSettings: void 0
                }, g.Sb.INFREQUENT_USER_ACTION), (0, u.Dx)(A), (0, u.pX)(C);
                let e = h.A.getPendingChanges(),
                    t = (0, m.Sk)(e);
                (0, s._L)(t).finally(s.pZ), (0, r.XS)(T), (0, r.AC)(y), x.Xi.updateSetting(S)
            } catch (e) {}
        }
    }, [])
}