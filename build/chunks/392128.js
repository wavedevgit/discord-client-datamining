/** chunk id: 392128, original params: e,t,r (module,exports,require) **/
r.d(t, {
    e: () => l
});
var s = r(544420),
    i = r(15285),
    n = r(403362);
async function l() {
    let e = i.Ay.getRunningGames();
    return (await Promise.all(e.map(async e => {
        let t;
        if (null == e.name) return null;
        try {
            t = await s.A.identifyGame(e.pid, e.name)
        } catch (e) {
            return null
        }
        let r = e.windowHandle,
            i = e.name,
            n = t.icon;
        return null != r && null != i && null != n ? {
            id: `window:${r}`,
            name: i,
            url: `data:image/bmp;base64,${n}`
        } : null
    }))).filter(n.Vq)
}