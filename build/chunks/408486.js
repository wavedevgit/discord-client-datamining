/** chunk id: 408486, original params: e,t,n (module,exports,require) **/
n.d(t, {
    z: () => u
});
var r = n(64700),
    l = n(311907),
    i = n(397927),
    s = n(253932),
    a = n(461213),
    o = n(954571),
    c = n(652215);

function u() {
    let e = s.tz.useSetting(),
        t = (0, l.bG)([a.A], () => a.A.getStatus());
    (0, r.useEffect)(() => {
        o.default.track(c.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
            show_current_game: e,
            status: t,
            rtc_popout_available: !e || t === i.clD.INVISIBLE
        })
    }, [e, t])
}