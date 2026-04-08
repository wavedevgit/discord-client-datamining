/** chunk id: 739560 params = (module,exports,require) **/
n.d(t, {
    A: () => l
}), n(667532);
var a = n(64700),
    i = n(506774);

function l() {
    let e = (0, a.useCallback)(e => {
        let t = new Set(s());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), i.w.set("RecentDismissibleOverrides", n)
    }, []);
    return [s(), e]
}

function s() {
    return i.w.get("RecentDismissibleOverrides") ?? []
}