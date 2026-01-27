/** Chunk was on web.js **/
/** chunk id: 753845, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968),
    i = n(64700),
    a = n(417597),
    o = n(859703),
    s = n(639214),
    l = n(73473);
let c = e => {
    let {
        applicationId: t,
        children: n,
        questContent: c
    } = e, u = (0, a.bG)([o.A], () => o.A.quests), d = i.useMemo(() => (0, s.jm)(u, t), [u, t]), f = i.useRef(null);
    return d.length > 0 ? (0, r.jsx)(l.R, {
        questOrQuests: d[0],
        questContent: c,
        sourceQuestContent: c,
        children: n
    }) : (0, r.jsx)(r.Fragment, {
        children: n(f, f)
    })
}