/** chunk id: 750580, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var l = n(64700),
    r = n(311907),
    i = n(95701),
    a = n(769591),
    s = n(517092);

function o(e) {
    let t = (0, a.os)("useShouldRenderBanner"),
        [n, o] = l.useState("");
    l.useEffect(() => {
        o("")
    }, [e.id]);
    let c = (0, r.bG)([s.A], () => s.A.getLastActionTime(e.id));
    l.useEffect(() => {
        !i.B4.has(e.type) || n === e.id || t && s.A.maybeAutoUpgradeChannel(e.id) && o(e.id)
    }, [n, t, c, e]);
    let u = l.useCallback(() => o(""), []);
    return {
        showUnreadsNotice: n === e.id,
        clearUnreadsNotice: u
    }
}