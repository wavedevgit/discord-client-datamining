/** Chunk was on 39048 **/
/** chunk id: 133154, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(36525),
    a = n(555337),
    o = n(199940),
    c = n(132514),
    d = n(985018);

function u(e) {
    let {
        guildId: t
    } = e, n = (0, l.bG)([c.A], () => c.A.getSettings()), a = (0, l.bG)([c.A], () => c.A.getSubmitting()), u = i.useCallback(() => {
        try {
            (0, o.W5)(t, n)
        } catch (e) {}
    }, [t, n]);
    return (0, r.jsx)(s.A, {
        onSave: u,
        onReset: o.sk,
        submitting: a,
        onSaveText: d.intl.string(d.t["R3BPH+"])
    })
}
let g = function() {
    let e = (0, l.bG)([a.A], () => a.A.getGuild());
    return null == e ? null : (0, r.jsx)(u, {
        guildId: e.id
    })
}