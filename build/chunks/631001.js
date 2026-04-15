/** chunk id: 631001 params = (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(323874), n(14289), n(35956);
var i = n(877227),
    l = n(839214),
    a = n(890687),
    r = n(652215);
let s = Object.freeze({
        tab: a.NC.ALL
    }),
    o = (0, l.D)(e => ({
        ...s,
        initializeFromUrl: (t, n) => {
            let i = new URLSearchParams(t).get(a.L1.TAB);
            (i !== a.NC.PREVIEW_TOOL || n) && null != i && Object.values(a.NC).includes(i) ? e({
                tab: i
            }) : e({
                tab: a.NC.ALL
            })
        },
        setTab: t => {
            e({
                tab: t
            });
            let n = new URLSearchParams;
            n.set(a.L1.TAB, t);
            let l = `${r.BVt.QUEST_HOME}?${n.toString()}`;
            (0, i.pX)(l.toString())
        }
    }))