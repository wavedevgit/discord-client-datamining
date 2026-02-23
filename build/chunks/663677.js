/** chunk id: 663677, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => o
});
var i = n(627968),
    s = n(397927),
    a = n(562519);
let r = 5 * n(927813).A.Millis.DAY,
    l = new a.A("overlay_survey_timestamps");

function o(e, t) {
    let a, o;
    a = Date.now(), null != (o = Array.from(l.values()).reduce((e, t) => Math.max(e, t), 0)) && a - o < r || Array.from(l.values()).filter(e => {
        let t = new Date(e);
        return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear()
    }).length >= 3 || (0, s.mMO)(async () => {
        let s, {
            default: a
        } = await n.e("82318").then(n.bind(n, 387101));
        return s = Date.now(), l.add(s), n => (0, i.jsx)(a, {
            ...n,
            clientSettingType: e,
            gameId: t
        })
    })
}