/** chunk id: 946716, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => i
});
var r = n(562465),
    l = n(319400),
    s = n(18572),
    a = n(652215);
let i = async e => {
    try {
        return (await r.Bo.get({
            url: a.Rsh.COLLECTIBLES_SEARCH,
            query: e,
            rejectWithError: !0
        })).body
    } catch (t) {
        let e = new l.LG(t);
        throw (0, s.o)(e), e
    }
}