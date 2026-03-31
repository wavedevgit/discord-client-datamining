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
            getAutocompleteRowItem: n,
            getAutocompleteGroupItem: s
        } = e, l = 0, a = [], i = [];
        for (let e of t) {
            let t = [],
                {
                    group: u,
                    results: o
                } = e;
            if (e.results.length > 0) {
                for (let e of o) {
                    let s = n({
                        result: e,
                        modeType: r.type,
                        group: u
                    });
                    t.push(s)
                }
                l += o.length;
                let e = s({
                    group: u,
                    rows: t
                });
                a.push(e), i.push(...t)
            }
        }
        return {
            autocompleteCount: l,
            autocompleteGroups: a,
            allAutocompleteRows: i
        }
    }, [t, r.type])
}