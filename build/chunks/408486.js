/** chunk id: 408486, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    z: () => d
});
var i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(253932),
    r = n(461213),
    o = n(954571),
    c = n(652215);

function d() {
    let e = a.tz.useSetting(),
        t = (0, s.bG)([r.A], () => r.A.getStatus());
    (0, i.useEffect)(() => {
        o.default.track(c.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
            show_current_game: e,
            status: t,
            rtc_popout_available: !e || t === l.clD.INVISIBLE
        })
    }, [e, t])
}