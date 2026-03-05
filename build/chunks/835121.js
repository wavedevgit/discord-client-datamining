/** chunk id: 835121 params = (module,exports,require) **/
r.d(t, {
    A: () => s
}), r(321073);
var n = r(64700);

function s(e) {
    let {
        autocompletes: t,
        mode: r
    } = e;
    return n.useCallback(e => {
        let {
            filterFn: n,
            getAutocompleteRowItem: s,
            getAutocompleteGroupItem: l
        } = e, a = 0, i = [], o = [];
        for (let e of t) {
            let t = [],
                {
                    group: c,
                    results: u
                } = e;
            if (n(e)) {
                for (let e of u) {
                    let n = s({
                        result: e,
                        modeType: r.type,
                        group: c
                    });
                    t.push(n)
                }
                a += u.length;
                let e = l({
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