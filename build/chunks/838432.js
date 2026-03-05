/** chunk id: 838432, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(64700),
    s = n(311907),
    l = n(967198),
    r = n(957300),
    a = n(652215);

function o() {
    let e = (0, r.E)(e => e.isPreviewMode),
        t = (0, s.bG)([l.A], () => l.A.getGuildId()),
        n = i.useRef(t);
    i.useEffect(() => {
        let i = n.current;
        e && i === a.YYv && t !== a.YYv && r.E.getState().exitPreview(), n.current = t
    }, [e, t])
}