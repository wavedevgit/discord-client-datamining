/** chunk id: 946716, original params: e,t,s (module,exports,require) **/
s.d(t, {
    $: () => o
});
var r = s(562465),
    l = s(319400),
    n = s(18572),
    a = s(652215);
let o = async e => {
    try {
        return (await r.Bo.get({
            url: a.Rsh.COLLECTIBLES_SEARCH,
            query: e,
            rejectWithError: !0
        })).body
    } catch (t) {
        let e = new l.LG(t);
        throw (0, n.o)(e), e
    }
}