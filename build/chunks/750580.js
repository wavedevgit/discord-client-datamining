/** Chunk was on 1113 **/
/** chunk id: 750580, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(95701),
    s = n(769591),
    a = n(517092);

function o(e) {
    let t = (0, s.os)("useShouldRenderBanner"),
        [n, o] = r.useState("");
    r.useEffect(() => {
        o("")
    }, [e.id]);
    let c = (0, l.bG)([a.A], () => a.A.getLastActionTime(e.id));
    r.useEffect(() => {
        !i.B4.has(e.type) || n === e.id || t && a.A.maybeAutoUpgradeChannel(e.id) && o(e.id)
    }, [n, t, c, e]);
    let u = r.useCallback(() => o(""), []);
    return {
        showUnreadsNotice: n === e.id,
        clearUnreadsNotice: u
    }
}