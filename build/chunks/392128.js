/** chunk id: 392128, original params: e,t,r (module,exports,require) **/
r.d(t, {
    e: () => s
}), r(896048);
var n = r(544420),
    i = r(15285),
    l = r(403362);
async function s() {
    let e = i.Ay.getRunningGames();
    return (await Promise.all(e.map(async e => {
        let t;
        if (null == e.name) return null;
        try {
            t = await n.A.identifyGame(e.pid, e.name)
        } catch (e) {
            return null
        }
        let r = e.windowHandle,
            i = e.name,
            l = t.icon;
        return null != r && null != i && null != l ? {
            id: "window:".concat(r),
            name: i,
            url: "data:image/bmp;base64,".concat(l)
        } : null
    }))).filter(l.Vq)
}