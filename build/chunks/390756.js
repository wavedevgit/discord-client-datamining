/** chunk id: 390756, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Mv: () => s,
    My: () => c,
    bV: () => l
}), n(896048);
var r = n(353640),
    i = n(499867),
    a = n(121894);
let o = (0, r.v)((0, i.eh)(() => ({
    commandAnalyticsContext: new Map
})));

function s(e) {
    let {
        command: t,
        location: n,
        sectionName: r
    } = e, {
        commandAnalyticsContext: i
    } = o.getState(), s = i.get(t);
    if (null == s || s.location !== n || s.sectionName !== r) {
        let e = new Map(i);
        e.set(t, {
            location: n,
            sectionName: r
        }), (0, a.r)(() => o.setState({
            commandAnalyticsContext: e
        }))
    }
}

function l(e) {
    let {
        commandAnalyticsContext: t
    } = o.getState();
    return t.get(e)
}

function c(e) {
    let {
        commandAnalyticsContext: t
    } = o.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, a.r)(() => o.setState({
            commandAnalyticsContext: n
        }))
    }
}