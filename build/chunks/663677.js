/** chunk id: 663677 params = (module,exports,require) **/
n.d(t, {
    L: () => o
});
var i = n(627968),
    s = n(397927),
    l = n(562519);
let a = 5 * n(927813).A.Millis.DAY,
    r = new l.A("overlay_survey_timestamps");

function o(e, t) {
    let l, o;
    l = Date.now(), null != (o = Array.from(r.values()).reduce((e, t) => Math.max(e, t), 0)) && l - o < a || Array.from(r.values()).filter(e => {
        let t = new Date(e);
        return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear()
    }).length >= 3 || (0, s.mMO)(async () => {
        let s, {
            default: l
        } = await n.e("82318").then(n.bind(n, 387101));
        return s = Date.now(), r.add(s), n => (0, i.jsx)(l, {
            ...n,
            clientSettingType: e,
            gameId: t
        })
    })
}