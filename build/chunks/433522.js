/** Chunk was on 47841 **/
/** chunk id: 433522, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(36525),
    s = n(555337),
    a = n(447696),
    o = n(861410),
    c = n(985018);
let d = () => {
    let {
        guild: e
    } = (0, i.bG)([s.A], () => s.A.getProps()), {
        submitting: t,
        welcomeSettings: n
    } = (0, i.bG)([o.A], () => o.A.getSettingsProps());
    return null == e ? null : (0, r.jsx)(l.A, {
        onSave: () => (0, a.i4)(e.id, n),
        onReset: a.oZ,
        submitting: t,
        onSaveText: c.intl.string(c.t["7NqTJn"]),
        message: c.intl.string(c.t["Z0/Wme"])
    })
}