/** chunk id: 791275, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(64700),
    i = n(695825);

function l(e) {
    let [t, n] = r.useState(!0), [l, s] = r.useState(), [a, o] = r.useState(), c = r.useCallback(async e => {
        n(!0), s(void 0);
        try {
            let t = await i.zW(e);
            o(t)
        } catch (e) {
            s(e)
        } finally {
            n(!1)
        }
    }, []);
    return r.useEffect(() => {
        c(e)
    }, [e, c]), {
        isLoading: t,
        error: l,
        highlightedCreatorDetails: a
    }
}