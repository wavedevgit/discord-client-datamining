/** Chunk was on 35125 **/
/** chunk id: 369162, original params: e,t,i (module,exports,require) **/
i.d(t, {
    P: () => c
}), i(896048);
var n = i(64700),
    l = i(985018);

function c() {
    let [e, t] = n.useState(!1), [i, c] = n.useState(!1), [r, o] = n.useState(!1);
    return {
        rules: n.useMemo(() => [{
            key: "healthy",
            title: l.intl.string(l.t.jIi9gq),
            body: l.intl.string(l.t["4uUAXh"]),
            onCheck: () => t(!e),
            checked: e
        }, {
            key: "nonNSFW",
            title: l.intl.string(l.t["iwnCh+"]),
            body: l.intl.string(l.t.UKFzEY),
            onCheck: () => c(!i),
            checked: i
        }, {
            key: "guidelines",
            title: l.intl.string(l.t.cZwlWn),
            body: l.intl.string(l.t.u0Go2s),
            onCheck: () => o(!r),
            checked: r
        }], [r, e, i]),
        rulesAccepted: e && i && r
    }
}