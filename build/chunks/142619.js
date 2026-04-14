/** chunk id: 142619 params = (module,exports,require) **/
a.d(t, {
    A: () => s
});
var r = a(64700),
    n = a(829219),
    o = a(405670),
    i = a(579473);

function s(e) {
    let t = (0, o.Kr)(e => e.transcript);
    return (r.useEffect(() => {
        let a = (0, i.tW)(e, i.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == t || t.questId !== e.id || t.fetchStatus === o.Lx.NONE || t.fetchStatus === o.Lx.SUCCESS && a?.url !== t.url) && (0, n.qY)(e)
    }, [t, e]), t?.questId === e.id && t?.fetchStatus === o.Lx.SUCCESS) ? t.text ?? null : null
}