/** chunk id: 850730 params = (module,exports,require) **/
n.d(t, {
    DB: () => N,
    ZL: () => E,
    ln: () => T,
    t0: () => S
});
var a = n(64700),
    i = n(873298),
    s = n(631670),
    l = n(817281),
    r = n(955572),
    o = n(775602),
    d = n(4227),
    c = n(993408),
    u = n(587600),
    m = n(84540),
    h = n(836602),
    x = n(544028),
    p = n(253932),
    g = n(594061),
    f = n(287809),
    v = n(927578),
    _ = n(652215),
    b = n(385803),
    j = n(381941);
let A = [_.NJ8.DARK, _.NJ8.LIGHT, _.NJ8.DARKER, _.NJ8.MIDNIGHT],
    C = [i.NS.COMPACT, i.NS.COZY, i.NS.DEFAULT];

function y(e) {
    return e[Math.floor(Math.random() * e.length)]
}
async function S() {
    let e, t = (e = f.default.getCurrentUser(), v.Ay.canUseClientThemes(e) ? Object.keys(b.ag).map(e => Number(e)) : []),
        n = t.length > 0 && Math.random() > .7;
    try {
        if (n) {
            let e, n = [...t, null],
                a = y(n);
            if (null != a) {
                let t = b.ag[a];
                e = t?.theme ?? _.NJ8.DARK
            } else e = y([_.NJ8.DARK, _.NJ8.DARKER, _.NJ8.MIDNIGHT]);
            await l.u_({
                theme: e,
                backgroundGradientPresetId: a ?? void 0,
                customUserThemeSettings: void 0
            }, g.Sb.INFREQUENT_USER_ACTION)
        } else {
            let e = y(A);
            await l.u_({
                theme: e,
                backgroundGradientPresetId: void 0,
                customUserThemeSettings: void 0
            }, g.Sb.INFREQUENT_USER_ACTION)
        }
    } catch (e) {}
}
async function E() {
    let e = d.A.purchases,
        t = (0, c.x9)(e),
        n = (0, c.$W)(e),
        a = t.length > 0,
        i = n.length > 0;
    if (a || i) try {
        let e = {};
        a && (e.avatarDecoration = y([...t, null])), i && (e.nameplate = y([...n, null])), (0, m.p)(e);
        let l = h.A.getPendingChanges(),
            r = (0, u.Sk)(l);
        await (0, s._L)(r).finally(s.pZ)
    } catch (e) {}
}

function T() {
    try {
        let e = y(_.hH7.FONT_SIZES);
        (0, r.XS)(e);
        let t = y(j.qh);
        (0, r.AC)(t);
        let n = y(C);
        p.Xi.updateSetting(n)
    } catch (e) {}
}

function N() {
    a.useEffect(() => {
        let e = f.default.getCurrentUser(),
            t = p.eh.getSetting(),
            n = d.A.purchases,
            a = (0, c.x9)(n),
            i = (0, c.$W)(n),
            v = x.A.theme,
            _ = t.backgroundGradientPresetId,
            b = e?.avatarDecoration?.skuId,
            j = e?.collectibles?.nameplate?.skuId,
            A = null != b ? a.find(e => e.skuId === b) ?? null : null,
            C = null != j ? i.find(e => e.skuId === j) ?? null : null,
            y = o.A.fontSize,
            S = o.A.messageGroupSpacing,
            E = p.Xi.getSetting();
        return () => {
            try {
                l.u_({
                    theme: v,
                    backgroundGradientPresetId: _ ?? void 0,
                    customUserThemeSettings: void 0
                }, g.Sb.INFREQUENT_USER_ACTION), (0, m.p)({
                    avatarDecoration: A,
                    nameplate: C
                });
                let e = h.A.getPendingChanges(),
                    t = (0, u.Sk)(e);
                (0, s._L)(t).finally(s.pZ), (0, r.XS)(y), (0, r.AC)(S), p.Xi.updateSetting(E)
            } catch (e) {}
        }
    }, [])
}