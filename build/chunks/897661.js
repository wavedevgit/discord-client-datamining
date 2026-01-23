/** Chunk was on 15682 **/
/** chunk id: 897661, original params: e,t,l (module,exports,require) **/
l.d(t, {
    b: () => i
});
var n = l(311907),
    r = l(833336),
    s = l(696451),
    a = l(752319),
    o = l(427262);

function i(e, t) {
    var l, i;
    let c = null != (l = o.Ay.useName(e)) ? l : "",
        d = null != (i = (0, n.bG)([r.A, a.A, s.Ay], () => {
            if (null != t) {
                var l;
                return null != (l = r.A.getPendingNickname()) ? l : s.Ay.getNick(t, null == e ? void 0 : e.id)
            }
            return a.A.getPendingGlobalName()
        }, [t, e])) ? i : c;
    return null != d ? d : c
}