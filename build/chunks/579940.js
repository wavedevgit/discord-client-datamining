/** Chunk was on web.js **/
/** chunk id: 579940, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y0: () => s,
    gf: () => l,
    nQ: () => c
});
var r = n(64700),
    i = n(353640),
    a = n(121894);
let o = Object.freeze({
        id: null,
        activeDescendant: null
    }),
    s = (0, i.v)(() => o);

function l(e, t, n) {
    (0, r.useEffect)(() => {
        (0, a.r)(() => {
            t ? s.setState({
                id: e,
                activeDescendant: n
            }) : s.setState({
                id: null,
                activeDescendant: null
            })
        })
    }, [e, t, n])
}

function c() {
    (0, a.r)(() => s.setState(() => o))
}