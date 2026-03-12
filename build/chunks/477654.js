/** chunk id: 477654 params = (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => r
});
var i = n(64700);
n(309613);
var s = n(652215);
let l = 9975 + s.T_y,
    a = 9975 / s.T_y;

function r(e) {
    let {
        totalResults: t,
        isSearching: n
    } = e, [r, o] = i.useState(t);
    return i.useEffect(() => {
        n || o(t)
    }, [t, n]), {
        isPaginationTotalCountLimited: r > 9975 + s.T_y,
        paginationTotalCount: Math.min(r, l),
        paginationMaxIndex: a
    }
}