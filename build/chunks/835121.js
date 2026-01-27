/** Chunk was on 52199 **/
/** chunk id: 835121, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
}), r(321073), r(896048);
var n = r(64700);

function l(e) {
    let {
        autocompletes: t,
        mode: r
    } = e;
    return n.useCallback(e => {
        let {
            filterFn: n,
            getAutocompleteRowItem: l,
            getAutocompleteGroupItem: s
        } = e, a = 0, i = [], o = [];
        for (let e of t) {
            let t = [],
                {
                    group: c,
                    results: u
                } = e;
            if (n(e)) {
                for (let e of u) {
                    let n = l({
                        result: e,
                        modeType: r.type,
                        group: c
                    });
                    t.push(n)
                }
                a += u.length;
                let e = s({
                    group: c,
                    rows: t
                });
                i.push(e), o.push(...t)
            }
        }
        return {
            autocompleteCount: a,
            autocompleteGroups: i,
            allAutocompleteRows: o
        }
    }, [t, r.type])
}