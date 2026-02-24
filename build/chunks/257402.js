/** chunk id: 257402, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(73153),
    r = n(544420),
    l = n(626584),
    a = n(760751);
let s = {};

function o(e) {
    let {
        name: t,
        hash: n,
        missingData: i
    } = e;
    for (let e of (a.A.markGameReported(t), i))
        if ("icon" === e) {
            let e = s[t];
            null != e && r.A.uploadIcon(t, n, e);
            return
        } else new l.A("GameStoreIconManager").log(`Could not find missing data key: ${e}`)
}

function d(e) {
    let {
        gameName: t,
        icon: n
    } = e;
    s[t] = n
}
let c = {
    initialize() {
        i.h.subscribe("UNVERIFIED_GAME_UPDATE", o), i.h.subscribe("GAME_ICON_UPDATE", d)
    }
}