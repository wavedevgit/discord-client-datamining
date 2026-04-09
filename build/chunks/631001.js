/** chunk id: 631001 params = (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(323874), n(14289), n(35956);
var i = n(877227),
    a = n(839214),
    l = n(890687),
    r = n(652215);
let s = Object.freeze({
        tab: l.NC.ALL
    }),
    o = (0, a.D)(e => ({
        ...s,
        initializeFromUrl: (t, n) => {
            let i = new URLSearchParams(t).get(l.L1.TAB);
            (i !== l.NC.PREVIEW_TOOL || n) && null != i && Object.values(l.NC).includes(i) ? e({
                tab: i
            }) : e({
                tab: l.NC.ALL
            })
        },
        setTab: t => {
            e({
                tab: t
            });
            let n = new URLSearchParams;
            n.set(l.L1.TAB, t);
            let a = `${r.BVt.QUEST_HOME}?${n.toString()}`;
            (0, i.pX)(a.toString())
        }
    }))