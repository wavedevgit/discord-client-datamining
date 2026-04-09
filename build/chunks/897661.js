/** chunk id: 897661 params = (module,exports,require) **/
a.d(t, {
    b: () => i
});
var n = a(311907),
    s = a(836602),
    l = a(696451),
    r = a(427262);

function i(e, t) {
    let a = r.Ay.useName(e);
    return (0, n.bG)([s.A, l.Ay], () => {
        let a = s.A.getPendingChanges(t);
        return null != t ? a.pendingNickname ?? l.Ay.getNick(t, e?.id) : a.pendingGlobalName
    }, [t, e]) ?? a ?? ""
}